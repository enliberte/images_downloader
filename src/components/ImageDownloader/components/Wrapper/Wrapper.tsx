import {FC} from "react";
import './Wrapper.css'

export const Wrapper: FC = ({children}) => {
    return (
        <div className="image-downloader-wrapper">
            {children}
        </div>
    )
}