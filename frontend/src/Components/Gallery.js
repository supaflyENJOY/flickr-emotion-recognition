import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ImagesContainer from "./ImagesContainer"

export default function Gallery(props) {
  const [filters, setFilters] = useState({
    checked1: false,
    checked2: false,
    checked3: false
  });

  const photos = [
    { id:0, text:'Photo', emotions:[] },
    { id:1, text:'Photo', emotions:[] },
    { id:2, text:'Photo', emotions:[] },
    { id:3, text:'Photo', emotions:[] },
    { id:4, text:'Photo', emotions:[] },
    { id:5, text:'Photo', emotions:[] },
    { id:6, text:'Photo', emotions:[] },
    { id:7, text:'Photo', emotions:[] },
  ]

  return (
    <div>
      <Filters onFiltersChanged={setFilters} /> 
      <ImagesContainer data={photos}/>
    </div>
  );
}
