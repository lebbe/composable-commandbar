type CommandBarProps = {
  children?: React.ReactNode
}

import './CommandBar.css'

export default function CommandBar({ children }: CommandBarProps) {
  return <nav className="cc-commandBar">{children}</nav>
}

CommandBar.Items = function Items({ children }: CommandBarProps) {
  return <div className="cc-commandBar--items">{children}</div>
}

CommandBar.FarItems = function FarItems({ children }: CommandBarProps) {
  return <div className="cc-commandBar--far-items">{children}</div>
}
