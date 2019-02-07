import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import ImagesContainer from './ImagesContainer';

export default function Gallery(props) {
  const [filters, setFilters] = useState({
    sadness: false,
    neutral: false,
    disgust: false,
    anger: false,
    surprise: false,
    happines: false,
    fear: false
  });
  const [photos, setPhotos] = useState([]);

  const [filteredPhotos, setFilteredPhotos] = useState([]);

  async function fetchMyAPI() {
    let url = 'http://something';
    let config = {};
    setTimeout(() => {
      setPhotos(data);
      refresh();
    }, 2000);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  function filter(arr) {
    let result = [];
    let keys = Object.keys(filters);
    let filtered = keys.filter(function(key) {
      return filters[key];
    });
    if (filtered.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < filtered.length; k++) {
          if (arr[i][k] > 5) {
            result.push(arr[i]);
          }
        }
      }
      setFilteredPhotos(result);
    } else {
      setFilteredPhotos(photos);
    }
  }

  function refresh() {
    filter(photos);
  }

  const data = [
    { id: 0, text: 'Photo', anger: 23, happines: 21 },
    { id: 1, text: 'Photo', neutral: 23, fear: 10 },
    { id: 2, text: 'Photo', anger: 11, surprise: 15 },
    { id: 3, text: 'Photo', sadness: 15, happines: 23 },
    { id: 4, text: 'Photo', fear: 32, disgust: 12 },
    { id: 5, text: 'Photo', surprise: 17, neutral: 23 },
    { id: 6, text: 'Photo', disgust: 35, sadness: 10 },
    { id: 7, text: 'Photo', happines: 20 }
  ];

  return (
    <div>
      <Filters onFiltersChanged={setFilters} apllyFilters={refresh} />
      <ImagesContainer data={filteredPhotos} />
    </div>
  );
}
