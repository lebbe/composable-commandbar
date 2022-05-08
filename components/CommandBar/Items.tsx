type Props = {
  children?: React.ReactNode
}

export default function CommandBarItems({ children }: Props) {
  return <div className="cc-commandBar--items">{children}</div>
}
