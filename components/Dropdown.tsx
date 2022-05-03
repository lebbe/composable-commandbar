import Icon from './Icon'

type DropdownProps = {
  children?: React.ReactNode
}

import './Dropdown.css'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Dropdown({ children }: DropdownProps) {
  const details = useRef(null)
  useEffect(function () {
    function onClick(e) {
      const closestSummary = e.target.closest('summary')
      if (
        details.current !== null &&
        (closestSummary === null ||
          closestSummary.parentElement !== details.current)
      ) {
        details.current.open = false
      }
    }
    window.addEventListener('click', onClick)
    return function () {
      window.removeEventListener('click', onClick)
    }
  }, [])
  return (
    <details ref={details} className="cc-dropdown">
      {children}
    </details>
  )
}

Dropdown.Button = function DropdownButton({
  children,
  overflow,
  icon,
}: DropdownProps & { overflow?: boolean; icon?: string }) {
  if (overflow) {
    return (
      <summary className="cc-dropdown__summary cc-button cc-button--overflow">
        <Icon>More</Icon>
      </summary>
    )
  }
  return (
    <summary className="cc-button cc-dropdown__summary">
      {icon && <Icon>{icon}</Icon>}
      {children}
      <Icon style={{ fontSize: 12, color: 'rgb(50, 49, 48)' }}>
        ChevronDown
      </Icon>
    </summary>
  )
}

type CalloutProps = {
  children?: React.ReactNode
}

Dropdown.Drawer = function Drawer({ children }: CalloutProps) {
  return <dialog className="cc-dropdown__drawer">{children}</dialog>
}
