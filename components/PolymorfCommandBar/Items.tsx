import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../Dropdown'
import throttle from 'lodash.throttle'

type ItemProps = {
  items: React.ReactNode[]
  overflowItems: React.ReactNode[]
}

function Key({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function getWidthsOfChildren(element: HTMLElement) {
  return Array.from(element.children).map((a) => a.clientWidth)
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

  useEffect(function () {
    if (ref.current === null) return
    widths.current = getWidthsOfChildren(ref.current)
  }, [])

  useEffect(
    function () {
      if (ref.current === null) return

      function adjust() {
        const totalWidth = ref.current.clientWidth
        // The last item (the overflows dropdown) should always be visible
        let occupiedWidth = widths.current[widths.current.length - 1] + 1

        for (var i = 0; i < widths.current.length - 1; i++) {
          if (occupiedWidth + widths.current[i] > totalWidth) {
            break
          }
          occupiedWidth = occupiedWidth + widths.current[i]
        }
        setExposedItems(items.slice(0, i))
        setOverflows(items.slice(i))
      }

      adjust()
      const throttledAdjust = throttle(adjust, 150)
      window.addEventListener('resize', throttledAdjust)

      return function () {
        window.removeEventListener('resize', throttledAdjust)
      }
    },

    [exposedItems.length]
  )

  return (
    <div ref={ref} className="cc-commandBar--items" {...props}>
      {exposedItems.map((a, i) => (
        <Key key={i}>{a}</Key>
      ))}
      <Dropdown aria-label="More commands">
        <Dropdown.Button overflow />
        <Dropdown.Drawer>
          {overflows.map((a, i) => (
            <Key key={i}>{a}</Key>
          ))}
          {overflowItems.map((a, i) => (
            <Key key={i}>{a}</Key>
          ))}
        </Dropdown.Drawer>
      </Dropdown>
    </div>
  )
}
