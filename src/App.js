import React from 'react';
import EditorApp from './EditorApp';
import images from './image/images.png';
import ImageCropper from './ImageCropper';
import Emoji from './Emoji';
import Filter from './Filter';

function App() {
  return (
    <div className="App">
      <Filter />
      <Emoji />
      <h1>editor</h1>
      <EditorApp />
      <ImageCropper
      src={images} />
    </div>
  );
}

export default App;
