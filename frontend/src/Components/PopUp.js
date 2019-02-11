import React from 'react';
import styled from 'styled-components';
import EmotionRate from './EmotionRate';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:rgba(8,8,12, 0.96);
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
    max-width: 100%;
    max-height: 90%;
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
const SvgContainer = styled.div`
img{
  width: 24px
  margin: 4px;
}
`

const Emotions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fixValue = (value) => {
  return (value).toFixed(0);
}
export default function PopUp({ photo, back, next, exit }) {
  const emotionData = [
    ['Anger', fixValue(photo.anger)],
    ['Happines', fixValue(photo.happiness)],
    ['Fear', fixValue(photo.fear)],
    ['Neutral', fixValue(photo.neutral)],
    ['Sadness', fixValue(photo.sadness)],
    ['Surprise', fixValue(photo.surprise)],
    ['Disgust', fixValue(photo.disgust)]
  ];

  const emotions = emotionData.filter(el => { if( el[1] !== '0' ){ console.log(el);return el }}).sort((prev, next) => next[1] - prev[1]);

  return (
    <Layout>
      <img src={require('../images/back.png')} alt={'arrow'} onClick={back} className={'arrows'} />
      <ImageDetails>
        {emotions.length>0 && <EmotionRate emotions={emotions} />}
        <img src={photo.url} alt="main" className="mainPhoto" />
        <DescriptionField>
          <Description>
            <h4>{photo.photoId}</h4>
            <p>{photo.description}</p>
          </Description>
          {(emotions[0] || emotions[1] || emotions[2]) &&
            <Emotions>
            <p>Top emotions</p>
            <SvgContainer>
              {emotions[0] && emotions[0][1]!=='0' && <img src={require(`../images/${emotions[0][0]}.svg`)}  alt={emotions[0][0]} />}
              { emotions[1] && emotions[1][1]!=='0' && <img src={require(`../images/${emotions[1][0]}.svg`)}  alt={emotions[1][0]} />}
              {emotions[2] && emotions[2][1]!=='0' && <img src={require(`../images/${emotions[2][0]}.svg`)}  alt={emotions[2][0]} />}
            </SvgContainer>
          </Emotions>
          }
        </DescriptionField>
      </ImageDetails>
      <img src={require('../images/next.png')} alt={'arrow'} onClick={next} className={'arrows'} />
      <img src={require('../images/clear.png')} alt={'exit'} onClick={exit} className={'clear'} />
    </Layout>
  );
}
