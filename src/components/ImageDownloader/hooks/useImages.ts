import {ChangeEvent, DragEventHandler, useRef, useState} from "react";
// @ts-ignore
import {v4} from 'uuid';
import {IImage} from "../types";

export const useImages = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [images, setImages] = useState<IImage[]>([])

    const open = () => {
        if (inputRef) {
            inputRef.current?.click()
        }
    }

    const processImages = (files: FileList) => {
        const images = Array.from(files)
        images.forEach(image => {
            if (!image.type.match('image')) {
                return
            }

            const reader = new FileReader()
            reader.onload = (event) => {
                setImages(prevState => ([
                    ...prevState,
                    {id: v4(), name: image.name, src: event.target?.result as string, isRemoving: false}
                ]))
            }

            reader.readAsDataURL(image)
        })
    }

    const dropImages: DragEventHandler<HTMLDivElement> = (event) => {
        processImages(event.dataTransfer?.files as FileList)
    }

    const selectImages = (event: ChangeEvent<HTMLInputElement>) => {
        processImages(event.target.files as FileList)
    }

    const removeImage = (id: string) => {
        setTimeout(() => setImages((prevState => prevState.filter(image => image.id !== id))), 500)
    }

    return {
        images,
        inputRef,
        open,
        removeImage,
        selectImages,
        dropImages
    }
}