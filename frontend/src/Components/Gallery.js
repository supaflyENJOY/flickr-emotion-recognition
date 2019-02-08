import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import PhotoPresenter from './PhotoPresenter';

const Loading = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spinner = styled.div`
  color: #979696;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  :after {
    animation: changeContent 1s linear infinite;
    display: block;
    content: '⠋';
    font-size: 110px;
    transform: rotate(90deg);
  }
  @keyframes changeContent {
    10% {
      content: '⠙';
    }
    20% {
      content: '⠹';
    }
    30% {
      content: '⠸';
    }
    40% {
      content: '⠼';
    }
    50% {
      content: '⠴';
    }
    60% {
      content: '⠦';
    }
    70% {
      content: '⠧';
    }
    80% {
      content: '⠇';
    }
    90% {
      content: '⠏';
    }
  }
`;

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
  const [existMoreItems, setExistMoreItems] = useState(true);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  function applyFilters(arr) {
    setFilters(arr);
    let result = [];
    let keys = Object.keys(arr);
    let selectedFilters = keys.filter(function(key) {
      return arr[key];
    });

    if (selectedFilters.length !== 0) {
      result = photos.filter(obj => {
        for (let filter in selectedFilters) {
          if (selectedFilters[filter] in obj) {
            return obj;
          }
        }
      });
      setFilteredPhotos(result);
    } else {
      setFilteredPhotos(photos);
    }
  }

  const data = [
    { id: 0, text: 'Photo', anger: 23, happines: 21 },
    { id: 1, text: 'Photo', neutral: 23, fear: 10 },
    { id: 2, text: 'Photo', anger: 11, surprise: 15 },
    { id: 3, text: 'Photo', sadness: 15, happines: 23 },
    { id: 4, text: 'Photo', fear: 32, disgust: 12 },
    { id: 5, text: 'Photo', surprise: 17, neutral: 23 },
    { id: 6, text: 'Photo', disgust: 35, sadness: 10 },
    { id: 7, text: 'Photo', happines: 20 },
    { id: 8, text: 'Photo', anger: 23, happines: 21 },
    { id: 9, text: 'Photo', neutral: 23, fear: 10 },
    { id: 10, text: 'Photo', anger: 11, surprise: 15 },
    { id: 11, text: 'Photo', sadness: 15, happines: 23 },
    { id: 12, text: 'Photo', fear: 32, disgust: 12 },
    { id: 13, text: 'Photo', surprise: 17, neutral: 23 },
    { id: 14, text: 'Photo', disgust: 35, sadness: 10 },
    { id: 15, text: 'Photo', happines: 20 },
    { id: 16, text: 'Photo', anger: 23, happines: 21 },
    { id: 17, text: 'Photo', neutral: 23, fear: 10 },
    { id: 18, text: 'Photo', anger: 11, surprise: 15 },
    { id: 19, text: 'Photo', sadness: 15, happines: 23 },
    { id: 20, text: 'Photo', fear: 32, disgust: 12 },
    { id: 21, text: 'Photo', surprise: 17, neutral: 23 },
    { id: 22, text: 'Photo', disgust: 35, sadness: 10 },
    { id: 23, text: 'Photo', happines: 20 },
    { id: 24, text: 'Photo', anger: 23, happines: 21 },
    { id: 25, text: 'Photo', neutral: 23, fear: 10 },
    { id: 26, text: 'Photo', anger: 11, surprise: 15 },
    { id: 27, text: 'Photo', sadness: 15, happines: 23 },
    { id: 28, text: 'Photo', fear: 32, disgust: 12 },
    { id: 29, text: 'Photo', surprise: 17, neutral: 23 },
    { id: 30, text: 'Photo', disgust: 35, sadness: 10 },
    { id: 31, text: 'Photo', happines: 20 }
  ];

  async function loadItems(page = 0) {
    setPhotos(data);
  }

  useEffect(() => {
    loadItems();
    if (photos.length > 0 && photos[photos.length - 1].id < 31) {
      setExistMoreItems(true);
    } else setExistMoreItems(false);
  }, []);

  useEffect(() => {
    applyFilters(filters);
  }, [filters, photos]);

  return (
    <div>
      <Filters onFiltersChanged={applyFilters} />
      {photos.length === 0 ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <PhotoPresenter data={filteredPhotos} load={loadItems} exist={existMoreItems} />
      )}
    </div>
  );
}
