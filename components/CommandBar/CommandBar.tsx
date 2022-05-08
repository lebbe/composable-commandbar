import './CommandBar.css'

type CommandBarProps = {
  children?: React.ReactNode
} & React.AllHTMLAttributes<HTMLDivElement>

export default function CommandBar({
  children,
  className,
  ...props
}: CommandBarProps) {
  return (
    <nav
      className={(className || '') + ' cc-commandBar'}
      role="toolbar"
      {...props}
    >
      {children}
    </nav>
  )
}

function CommandBarItems({ children, ...props }: CommandBarProps) {
  return (
    <div className="cc-commandBar--items" {...props}>
      {children}
    </div>
  )
}

function FarItems({ children, ...props }: CommandBarProps) {
  return (
    <div className="cc-commandBar--far-items" {...props}>
      {children}
    </div>
  )
}

CommandBar.Items = CommandBarItems

CommandBar.FarItems = FarItems
