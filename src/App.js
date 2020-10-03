import React from 'react';

function Gallery( {name, image} ) {
  return <div>
    <h1>The Gallery Name is {name}</h1>
    <img src={image} />
  </div>
}

const galleryArr = [
  {
    name:"ishii cho sayaney #1",
    img_url:"https://www.sayaney.com/wp-content/uploads/2020/09/0008-701x1024-640x480.jpg"
  },
  {
    name:"ishii cho sayaney #2",
    img_url:"https://www.sayaney.com/wp-content/uploads/2020/09/0033-701x1024-640x480.jpg"
  },
  {
    name:"ishii cho sayaney #3",
    img_url:"https://www.sayaney.com/wp-content/uploads/2020/09/0032-701x1024-640x480.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello World!!</h1>
      {
        galleryArr.map( (glyObj) => {
          return <Gallery name = {glyObj.name} image = {glyObj.img_url} />
        } )
      }
    </div>
  );
}

export default App;
