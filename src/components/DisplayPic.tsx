import React from 'react';
import Image from '../interfaces/Image';

export interface DisplayPicProps {
    selected: Image[],
    exitImageCallback: () => void;
}

const DisplayPic: React.FunctionComponent<DisplayPicProps> = (props) => {

    const selectedImage = props.selected[0]; 
  
    return (
        <div className="img-selected-container">
            <img 
                className='img-display'
                alt={selectedImage.description} 
                src={selectedImage.url}
            />       
            <i
                onClick={() => {props.exitImageCallback(); } }
                className='close icon'
            />
        </div>
    );
};

export default DisplayPic;