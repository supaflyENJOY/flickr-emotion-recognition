import React, { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import PopUp from './PopUp';

const PhotosWrapper = styled.div`
  margin-top: 100px;
  width: 90%;
  min-height: calc(100vh - 144px);
  margin-left: 5%;
  margin-right:5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
  >div{
    margin:0 10px 23px 10px
    width:410px;
    height:360px;
  }
`;
const Layout = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
const ImageWrapper = styled.div`
  display: flex;
  
  width 90%;
  margin-left:5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >img{
    margin-top: 18px;
    width:370px;
    height:260px;
  }
  text-align:left;
`;

const Description = styled.div`
  width: 100%;
  color: #333;
  h4 {
    margin: 20px 0 8px 0;
    font-family: Muller;
    font-size: 21px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.19;
    letter-spacing: normal;
  }
  p {
    margin: 0;
    font-family: Muller;
    font-size: 17px;
    color: #959595;
  }
`;

export default function ImagesContainer({ data, load, exist }) {
  const [id, setID] = useState(null);
  function nextPhoto() {
    if (id < data.length - 1) {
      setID(id + 1);
    }
  }
  function previousPhoto() {
    if (id >= 1) {
      setID(id - 1);
    }
  }
  function clear() {
    setID(null);
  }

  const photos = data.map(photo => (
    <Layout key={photo.id} onClick={() => setID(photo.id)}>
      <ImageWrapper>
        <img src={require('../images/image.png')} alt={'faces'} />
        <Description>
          <h4>{photo.text}</h4>
          <p>{photo.text}</p>
        </Description>
      </ImageWrapper>
    </Layout>
  ));

  return (
    <>
      {id !== null ? (
        <PopUp photo={data[id]} back={previousPhoto} next={nextPhoto} exit={clear} />
      ) : null}

      <InfiniteScroll
        pageStart={0}
        loadMore={load}
        hasMore={exist}
        loader={<div className="loader">Loading ...</div>}
        useCapture
      >
        {' '}
        <PhotosWrapper>{photos}</PhotosWrapper>
      </InfiniteScroll>
    </>
  );
}
