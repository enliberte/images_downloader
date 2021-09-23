import { ChangeEvent, FC, RefObject } from 'react'
import './Input.css'

interface InputProps {
    inputRef: RefObject<HTMLInputElement>
    selectImages: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ inputRef, selectImages }) => {
  return (
        <input
            ref={inputRef}
            className="image-downloader-input" type="file"
            multiple
            accept=".jpg,.png,.jpeg"
            onChange={selectImages}
        />
  )
}
