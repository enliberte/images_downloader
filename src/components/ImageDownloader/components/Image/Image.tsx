import { FC, useState } from 'react'
import { IImage } from '../../types'
import './Image.css'

interface ImageProps extends IImage {
    width: string
    removeImage: (id: string) => void
}

export const Image: FC<ImageProps> = ({ src, id, name, removeImage, width }) => {
  const [isRemoving, setIsRemoving] = useState(false)
  const imageWrapperClassName = 'image-wrapper'

  const deleteImage = () => {
    setIsRemoving(true)
    removeImage(id)
  }

  return (
        <div className={isRemoving ? imageWrapperClassName + ' removing' : imageWrapperClassName} style={{ width }}>
            <div className="remove-image-button" onClick={deleteImage}>&times;</div>
            <img className="image" src={src} alt={id}/>
            <div className="image-name">{name}</div>
        </div>
  )
}
