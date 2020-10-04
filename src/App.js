import React from "react";
import PropTypes from "prop-types";

function Gallery({ id, name, image, rating }) {
  return (
    <div>
      <h1>The Gallery Name is {name}</h1>
      <h2>The Gallery Id is {id}</h2>
      <h3>Rating is {rating}/5.0</h3>
      <img src={image} alt={name} />
    </div>
  );
}

Gallery.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const galleryArr = [
  {
    id: 1,
    name: "ishii cho sayaney #1",
    img_url:
      "https://www.sayaney.com/wp-content/uploads/2020/09/0008-701x1024-640x480.jpg",
    rating: 4.2,
  },
  {
    id: 2,
    name: "ishii cho sayaney #2",
    img_url:
      "https://www.sayaney.com/wp-content/uploads/2020/09/0033-701x1024-640x480.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "ishii cho sayaney #3",
    img_url:
      "https://www.sayaney.com/wp-content/uploads/2020/09/0032-701x1024-640x480.jpg",
    rating: 4.7,
  },
];

function App() {
  return (
    <div>
      <h1>Hello World!!</h1>
      {galleryArr.map((glyObj) => {
        return (
          <Gallery
            key={glyObj.id}
            id={glyObj.id}
            name={glyObj.name}
            image={glyObj.img_url}
            rating={glyObj.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
