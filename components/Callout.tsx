import './Callout.css'

type CalloutProps = {
  children?: React.ReactNode
}

export function Callout({ children }: CalloutProps) {
  return <dialog className="cc-callout">{children}</dialog>
}
