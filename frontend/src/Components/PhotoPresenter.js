import React, { useState } from 'react';
import styled from 'styled-components';
import PopUp from './PopUp';
import Photos from './Photos';
import InfiniteScroll from 'react-infinite-scroller';

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

export default function PhotosPresenter({ data, load, exist }) {
  const [id, setId] = useState(null);
  function nextPhoto() {
    if (id < data.length - 1) {
      setId(id + 1);
    }
  }
  function previousPhoto() {
    if (id >= 1) {
      setId(id - 1);
    }
  }
  function clear() {
    setId(null);
  }

  return (
    <>
      {id !== null ? (
        <PopUp photo={data[id]} back={previousPhoto} next={nextPhoto} exit={clear} />
      ) : null}
      <InfiniteScroll
        pageStart={0}
        loadMore={load}
        hasMore={exist}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <PhotosWrapper>
            <Photos data={data} changeId={setId} />
        </PhotosWrapper>
      </InfiniteScroll>
    </>
  );
}
