import { FC } from 'react'
import './ButtonsGroup.css'

export const ButtonsGroup: FC = ({ children }) => {
  return (
        <div className="buttons-group">
            {children}
        </div>
  )
}
