import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import EmotionRate from './EmotionRate';
import ImageMapper from 'react-image-mapper';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8, 8, 12, 0.96);
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
    max-height: 85%;
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
`;;

const Emotions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fixValue = value => (value).toFixed(0);;
export default function PopUp({
 photo, back, next, exit 
}) {

  const [selectedFace, setSelectedFace] = useState(-1);

  const enterArea = (area) => {
    setSelectedFace(area.id);
  }
  const leaveArea = (area) => {
    setSelectedFace(-1);
  }

  const MAP = {
    name: "face-map",
    areas: photo.emotions.map((face, idx) => ({ 
      name: "",
      id: idx,
      shape: "rect", 
      preStrokeColor: "red",
      coords: [face.positionX, face.positionY, face.positionX + face.width, face.positionY + face.height]
    }))
  };

  const totalEmotionData = [
    ['Anger', fixValue(photo.anger)],
    ['Happines', fixValue(photo.happiness)],
    ['Fear', fixValue(photo.fear)],
    ['Neutral', fixValue(photo.neutral)],
    ['Sadness', fixValue(photo.sadness)],
    ['Surprise', fixValue(photo.surprise)],
    ['Disgust', fixValue(photo.disgust)],
  ];
  let emotionData = totalEmotionData;

  if(selectedFace !== -1)  {
    emotionData = [
      ['Anger', fixValue(photo.emotions[selectedFace].anger)],
      ['Happines', fixValue(photo.emotions[selectedFace].happiness)],
      ['Fear', fixValue(photo.emotions[selectedFace].fear)],
      ['Neutral', fixValue(photo.emotions[selectedFace].neutral)],
      ['Sadness', fixValue(photo.emotions[selectedFace].sadness)],
      ['Surprise', fixValue(photo.emotions[selectedFace].surprise)],
      ['Disgust', fixValue(photo.emotions[selectedFace].disgust)],
    ]
  }

  const proceedEmotions = (data) => data.filter(el => {
      if (el[1] !== '0') {
        return el;
      }
    })
    .sort((prev, next) => next[1] - prev[1]);

  const emotions = proceedEmotions(emotionData);
    

  const topEmotions = proceedEmotions(totalEmotionData);

  const ref = useRef();

  const [scale, setScale] = useState(1);
  const [originalWidth, setOriginalWidth] = useState(undefined);

  useEffect(() => {
    ref.current.img.onload = () => {
      const width = ref.current.img.clientWidth;
      const height = ref.current.img.clientHeight;
      const scaling = Math.max(width / 915, height / 615);
      setOriginalWidth(width);
      setScale(scaling);
    }
  }, [ref])


  return (
    <Layout>
      <img src={require('../images/back.png')} alt="arrow" onClick={back} className="arrows" />
      <ImageDetails>
        {emotions.length > 0 && <EmotionRate emotions={emotions} />}

        <div className="mainPhoto">
          <ImageMapper 
            src={photo.url} 
            alt="main" 
            map={MAP}
            ref={ref}
            imgWidth={originalWidth}
            width={originalWidth ? originalWidth / scale : undefined}
            onMouseEnter={area => enterArea(area)}
            onMouseLeave={area => leaveArea(area)}
          />
        </div>
        <DescriptionField>
          <Description>
            <h4>{photo.description}</h4>
            <p>{new Date(photo.creationDate).toLocaleDateString()}</p>
            <p>You can move your cursor to any face and check emotion rate of selected face</p>
          </Description>
          {(topEmotions[0] || topEmotions[1] || topEmotions[2])
            && <Emotions>
                <p>Top emotions</p>
              <SvgContainer>
                {topEmotions[0] && topEmotions[0][1] !== '0' && (
                  <img src={require(`../images/${topEmotions[0][0]}.svg`)} alt={topEmotions[0][0]} />
                )}
                {topEmotions[1] && topEmotions[1][1] !== '0' && (
                  <img src={require(`../images/${topEmotions[1][0]}.svg`)} alt={topEmotions[1][0]} />
                )}
                {topEmotions[2] && topEmotions[2][1] !== '0' && (
                  <img src={require(`../images/${topEmotions[2][0]}.svg`)} alt={topEmotions[2][0]} />
                )}
              </SvgContainer>
              </Emotions>
          }
        </DescriptionField>
      </ImageDetails>
      <img src={require('../images/next.png')} alt="arrow" onClick={next} className="arrows" />
      <img src={require('../images/clear.png')} alt="exit" onClick={exit} className="clear" />
    </Layout>
  );
}
