import React from 'react';
import styled from 'styled-components';

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
    max-width:95%;
    max-height:260px;
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

export default function photos({ data, changeId }) {
  return data.map((photo, idx) => (
    <Layout key={photo.photoId} onClick={() => changeId(idx)}>
      <ImageWrapper>
        <img src={photo.smallUrl} alt={'faces'} />
        <Description>
          <h4>{photo.description}</h4>
          <p>{new Date(photo.creationDate).toLocaleDateString()}</p>
        </Description>
      </ImageWrapper>
    </Layout>
  ));
}
