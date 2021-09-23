import { FC } from 'react'
import { IImage } from '../../types'
import { Image } from '../Image/Image'
import './Images.css'

interface ImagesProps {
    images: IImage[],
    removeImage: (id: string) => void
}

export const Images: FC<ImagesProps> = ({ images, removeImage }) => {
  const imageWidth = `${Math.max(100 / images.length, 25)}%`
  return (
        <div className="images">
            {images.map(image => <Image key={image.id} {...image} removeImage={removeImage} width={imageWidth}/>)}
        </div>
  )
}
