import '../CommandBar/CommandBar.css'
import CommandBarItems from './Items'

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
      className={(className || '') + ' cc-commandBar cc-commandBar--polymorf'}
      role="toolbar"
      {...props}
    >
      {children}
    </nav>
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
