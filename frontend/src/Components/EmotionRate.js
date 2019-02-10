import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30%;
  height: 221px;
  opacity: 0.94;
  border-radius: 11px;
  background-color: #101115;
  position: absolute;
  top: 10%;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-family: Muller;
  font-size: 21px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0.4em;
  h3 {
    font-weight: normal;
    font-family: Muller;
    font-size: 21px;
  }
`;

const Body = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 10%;
    width: 80%;
  }
`;

const EmotionContainer = styled.div`
  width: 80px;
  height: 20px;
  font-family: Muller;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #848484;
`;
const Key = styled.div`
  font-family: Muller;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #848484;
`;
const Value = styled.div`
  font-family: Muller;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

export default function emotionRate({ emotions }) {
  return (
    <Wrapper>
      <Header>
        <h3>Emotion Rate</h3>
      </Header>
      <Body>
        {emotions.map(emotion => (
          <EmotionContainer key={emotion[0]}>
            <Key>{emotion[0]}:</Key>
            <Value>{emotion[1]}%</Value>
          </EmotionContainer>
        ))}
      </Body>
    </Wrapper>
  );
}
