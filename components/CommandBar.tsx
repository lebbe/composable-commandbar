type CommandBarProps = {
  children?: React.ReactNode
}

import './CommandBar.css'

export default function CommandBar({ children }: CommandBarProps) {
  return <nav className="cc-commandBar">{children}</nav>
}

export function CBItems({ children }: CommandBarProps) {
  return <div className="cc-commandBar--items">{children}</div>
}

export function CBFarItems({ children }: CommandBarProps) {
  return <div className="cc-commandBar--far-items">{children}</div>
}
