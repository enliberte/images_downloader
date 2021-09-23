import { FC } from 'react'
import './ControlsWrapper.css'

export const ControlsWrapper: FC = ({ children }) => {
  return (
        <div className="controls-wrapper">
            {children}
        </div>
  )
}
