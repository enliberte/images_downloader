import { FC } from 'react'
import './Button.css'

interface ButtonProps {
    text: string
    className?: string
    clickHandler: () => void
}

export const Button: FC<ButtonProps> = ({ text, clickHandler, className = '' }) => {
  const ownClass = 'button'
  const classes = className ? ownClass + ' ' + className : ownClass
  return (
        <div className={classes} onClick={clickHandler}>
            {text}
        </div>
  )
}
