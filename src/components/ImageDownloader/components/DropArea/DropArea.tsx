import { DragEventHandler, FC, useState } from 'react'
import './DropArea.css'

interface DropAreaProps {
    dropHandler: DragEventHandler<HTMLDivElement>
}

export const DropArea: FC<DropAreaProps> = ({ dropHandler }) => {
  const [isOver, setIsOver] = useState(false)

  const prevent: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    prevent(event)
    setIsOver(true)
  }

  const handleDragLeave: DragEventHandler<HTMLDivElement> = (event) => {
    prevent(event)
    setIsOver(false)
  }

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    prevent(event)
    dropHandler(event)
    setIsOver(false)
  }

  const dropAreaClassName = 'drop-area'

  return (
        <div
            className={isOver ? dropAreaClassName + ' over' : dropAreaClassName}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            Перетащите сюда файлы, чтобы загрузить
        </div>
  )
}
