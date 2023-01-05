import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: "diving",
      category: "fish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "pup",
      category: "doggo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "ocean",
      category: "ship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "fitness",
      category: "gym",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },

  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;