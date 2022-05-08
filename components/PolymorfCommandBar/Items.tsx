import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../Dropdown'

type ItemProps = {
  items: React.ReactNode[]
  overflowItems: React.ReactNode[]
}

function DummyWithKey({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function getWidthsOfChildren(element: HTMLElement) {
  return Array.from(element.children).map((a) => a.clientWidth)
}

function getTotalWidthOfChildren(element: HTMLElement) {
  return getWidthsOfChildren(element).reduce((a, b) => a + b)
}

export default function CommandBarItems({
  items,
  overflowItems,
  ...props
}: ItemProps) {
  const [exposedItems, setExposedItems] = useState(items)
  const [overflows, setOverflows] = useState<React.ReactNode[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const widths = useRef<number[]>([])

  useEffect(
    function () {
      if (ref.current === null) return
      widths.current = getWidthsOfChildren(ref.current)

      function adjust() {
        if (window.innerWidth < ref.current.parentElement.scrollWidth) {
          setExposedItems(items.slice(0, exposedItems.length - 1))
          setOverflows(items.slice(exposedItems.length - 1))
        } else {
          const firstNonExposedItem = items[exposedItems.length]
          if (firstNonExposedItem === undefined) return

          if (
            getTotalWidthOfChildren(ref.current) +
              widths.current[exposedItems.length] <
            ref.current.scrollWidth
          ) {
            setExposedItems(items.slice(0, exposedItems.length + 1))
            setOverflows(items.slice(exposedItems.length + 1))
          }
        }
      }

      window.addEventListener('resize', adjust)
    },
    [window.innerWidth]
  )

  return (
    <div ref={ref} className="cc-commandBar--items" {...props}>
      {exposedItems.map((a, i) => (
        <DummyWithKey key={i}>{a}</DummyWithKey>
      ))}
      <Dropdown aria-label="More commands">
        <Dropdown.Button overflow />
        <Dropdown.Drawer>
          {overflows.map((a, i) => (
            <DummyWithKey key={i}>{a}</DummyWithKey>
          ))}
          {overflowItems.map((a, i) => (
            <DummyWithKey key={i}>{a}</DummyWithKey>
          ))}
        </Dropdown.Drawer>
      </Dropdown>
    </div>
  )
}
