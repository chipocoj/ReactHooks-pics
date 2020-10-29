import './ImageList.css';
import ImageCard from './ImageCard';
import Image from '../interfaces/Image';
import React from 'react';

export interface ImageListProps {
    imageList: Image[]
    updateSelection: (img:Image) => void;
}

const ImageList: React.FunctionComponent<ImageListProps> = props => {
    const updateSelected = (img:Image) => {
        props.updateSelection(img)
    }

    const images = props.imageList.map((im: Image) => {
        return <ImageCard key={im.id} image={im} updateSelect={updateSelected} />;
    });
    return(
        <div className="image-list">{images}</div>
    )
}

export default ImageList;