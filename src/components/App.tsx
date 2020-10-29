import React, { useState } from 'react';
import Image from '../interfaces/Image';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import DisplayPic from './DisplayPic';


const App: React.FunctionComponent = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selected, setSelected] = useState<Image[]>([]);
  const [hidden, setHidden] = useState<Boolean>(true); 

  const onSearchSubmit = async (term:string) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: 20
      }
    });

    const imageList = response.data.results.map(
      (im: any) => (
        {
          id: im.id, 
          description: im.alt_description, 
          url: im.urls.regular
        }));
    setImages(imageList);
    setSelected([]);
  };

  const updateSelectedImage = (img:Image) => {
    setSelected([img]);
    setHidden(false);
  }

  const updateHidden = () =>{
    setHidden(true);
    setSelected([]);
  }


  return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList imageList={images} updateSelection={updateSelectedImage} />
        {!hidden && <DisplayPic selected={selected} exitImageCallback={updateHidden} />}
    </div>
  );
}

export default App;
