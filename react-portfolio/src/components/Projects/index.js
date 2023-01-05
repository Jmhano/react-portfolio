import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from "../PhotoList";

function Project ({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <PhotoList  />
      </section>
    );
  }
  

export default Project;