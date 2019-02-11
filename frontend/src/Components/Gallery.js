import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import PhotoPresenter from './PhotoPresenter';
import Axios from 'axios';

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
    console.log(arr)
    console.log(photos)
    setFilters(arr);
    let result = [];
    let keys = Object.keys(arr);
    let selectedFilters = keys.filter(function(key) {
      return arr[key];
    });

    if (selectedFilters.length !== 0) {
      result = photos.filter(obj => {
        let correctObj = true
        for (let i = 0; i < selectedFilters.length; i++) {
          if (!obj[selectedFilters[i]] || obj[selectedFilters[i]]<5) {
            correctObj = false
          }
        }
        if(correctObj){
          return obj;
        }
      });
      setFilteredPhotos(result);
    } else {
      setFilteredPhotos(photos);
    }
  }

  async function loadItems(page = 0) {
    // No way...
    const response = await Axios.get(`https://flickr-emotions-recognition.herokuapp.com/api/list?page=${page}`);
    const data = response.data.map(item => {
      const emots = {
        anger: 0,
        disgust: 0,
        fear: 0,
        happiness: 0,
        neutral: 0,
        sadness: 0,
        surprise: 0,
      }
      const totalEmotions = item.emotions
        .reduce((prev, current) => {
          let result = {};
          Object.keys(prev).forEach((key) => {
            result[key] = parseFloat(prev[key]) + parseFloat(current[key]);
          })
          return result;
        }
        , emots);
      let averageEmotions = {};
      if(item.emotions.length > 0) {
        Object.keys(totalEmotions).forEach(key => {
          averageEmotions[key] = totalEmotions[key] / item.emotions.length;
        })
      } else {
        averageEmotions = emots;
      }
      const smallUrl = item.url.replace('_b.jpg', '_n.jpg');
      return { ...item, ...averageEmotions, smallUrl }
    })
    const newPhotos = [...photos, ...data];
    setPhotos(newPhotos);
  }

  useEffect(() => {
    loadItems();
    setExistMoreItems(true);
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
