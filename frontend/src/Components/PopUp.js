import React, { useState } from "react";
import styled from "styled-components";

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
  .arrows{
    margin:20px;
    width:28px;
    height:53px;
    filter: invert(100%);
  }
  .clear{
    position:absolute;
    top:60px;
    right:85px;
  }
  `
const ImageDetails = styled.div`
    width:915px;
    height:826px;
    border-radius: 5px;
    background-color: #ffffff;  
`

export default function PopUp({ photo, back, next, exit }) {

  return(
    <Layout>
      <img src={require('../images/back.png')} onClick={back} className={'arrows'}/>
      <ImageDetails>
        <h1>{photo.id}</h1>
      </ImageDetails>
      <img src={require('../images/next.png')} onClick={next}  className={'arrows'}/>
      <img src={require('../images/clear.png')} onClick={exit} className={'clear'} />
    </Layout>
  )
}