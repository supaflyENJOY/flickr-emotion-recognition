import React, { useState, useEffect } from "react";
import Filters from "./FIlters";

export default function Gallery(props) {
  const [filters, setFilters] = useState({
    checked1: false,
    checked2: false,
    checked3: false
  });
  
  return (
    <div>
      <Filters onFiltersChanged={setFilters} />      
    </div>
  );
}
