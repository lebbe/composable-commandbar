import Icon from './Icon'

import './Button.css'

type ButtonProps = {
  children?: React.ReactNode
  icon?: string
}

export default function Button({ children, icon }: ButtonProps) {
  const classNames = ['cc-button']
  if (icon && !children) {
    classNames.push('cc-button--icon-only')
  }
  return (
    <button className={classNames.join(' ')}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </button>
  )
}
