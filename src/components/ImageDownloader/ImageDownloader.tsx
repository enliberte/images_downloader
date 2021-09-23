import { FC } from 'react'
import { Input, Wrapper, ControlsWrapper, ButtonsGroup, Button, Images, DropArea } from './components'
import { useImages } from './hooks'

export const ImageDownloader: FC = () => {
  const { inputRef, images, open, selectImages, removeImage, dropImages } = useImages()

  return (
        <Wrapper>
            <Input inputRef={inputRef} selectImages={selectImages}/>
            <ControlsWrapper>
                <DropArea dropHandler={dropImages}/>
                <ButtonsGroup>
                    <Button text="Открыть" clickHandler={open}/>
                </ButtonsGroup>
            </ControlsWrapper>
            {images.length ? <Images images={images} removeImage={removeImage}/> : null}
        </Wrapper>
  )
}
