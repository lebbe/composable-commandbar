type IconProps = {
  children: string
  style?: any
}

export default function Icon({ children, style }: IconProps) {
  return (
    <i
      style={style}
      className={`ms-Icon ms-Icon--${children}`}
      aria-hidden="true"
    ></i>
  )
}
