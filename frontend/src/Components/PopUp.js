import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.96;
  background-color: #08080c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .arrows {
    margin: 20px;
    width: 28px;
    height: 53px;
    filter: invert(100%);
  }
  .clear {
    position: absolute;
    top: 60px;
    right: 85px;
  }
`;

const ImageDetails = styled.div`
  opacity: 1;
  width: 915px;
  height: 826px;
  border-radius: 5px;
  background-color: #ffffff;
  .mainPhoto {
    width: 100%;
    opacity: 1;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const DescriptionField = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;
const Description = styled.div`
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
const Emotions = styled.div``;

export default function PopUp({ photo, back, next, exit }) {
  return (
    <Layout>
      <img src={require('../images/back.png')} alt={'arrow'} onClick={back} className={'arrows'} />
      <ImageDetails>
        <img src={require('../images/image.png')} alt="main" className="mainPhoto" />
        <DescriptionField>
          <Description>
            <h4>{photo.id}</h4>
            <p>{photo.text}</p>
          </Description>
          <Emotions>
            <p>Top emotions</p>
          </Emotions>
        </DescriptionField>
      </ImageDetails>
      <img src={require('../images/next.png')} alt={'arrow'} onClick={next} className={'arrows'} />
      <img src={require('../images/clear.png')} alt={'exit'} onClick={exit} className={'clear'} />
    </Layout>
  );
}
