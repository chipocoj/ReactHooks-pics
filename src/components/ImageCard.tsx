import React from 'react';
import Image from '../interfaces/Image';

export interface ImageCardProps {
    key: string,
    image: Image,
    updateSelect: (img:Image) => void;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = props => {
    const handleClick = () => {
        props.updateSelect(props.image);
    }

    const { description, url } = props.image;

    return(
        <div className="img-container">
            <img
                className='img-cropped'
                onClick={handleClick}
                alt={description}
                src={url}
            />
            <div className='img-select-circle'>
                <i className='circle outline icon'/>
            </div>
        </div>
    )
}

export default ImageCard;