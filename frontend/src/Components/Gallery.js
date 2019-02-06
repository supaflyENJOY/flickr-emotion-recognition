import React, { useState, useEffect } from "react";
import Filters from "./FIlters";
import ImagesContainer from "./ImagesContainer"

export default function Gallery(props) {
  const [filters, setFilters] = useState({
    checked1: false,
    checked2: false,
    checked3: false
  });

  const photos = [
    { text:'Photo', emotions:[] },
    { text:'Photo' },
    { text:'Photo' },
    { text:'Photo' },
    { text:'Photo' },
    { text:'Photo' },
    { text:'Photo' },
    { text:'Photo' }
  ]

  return (
    <div>
      <Filters onFiltersChanged={setFilters} /> 
      <ImagesContainer data={photos}/>
    </div>
  );
}
