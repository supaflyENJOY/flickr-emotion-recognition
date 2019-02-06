import React, { useState } from "react";
import Paper from '@material-ui/core/Paper'
import styled from "styled-components";
import Photo from "../images/image.png"

const PhotosWrapper = styled.div`
  margin-top: 100px;
  width: 90%;
  height: calc(100vh - 144px);
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
`
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
`

const Description = styled.div`
    width:100%
    color:#333
    h4{
      margin: 20px 0 8px 0;
      font-family: Muller;
      font-size: 21px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.19;
      letter-spacing: normal;
    }
    p{
      margin: 0;
      font-family: Muller;
      font-size: 17px;
      color: #959595;
    }
`

export default function ImagesContainer( {data} ){
  const [photo, setPhoto] = useState(null); 
  const photos = data.map((photo)=>
    <Paper onClick={()=> window.alert()}>
      <ImageWrapper>
        <img  src={require('../images/image.png')}/>
        <Description>
          <h4>{photo.text}</h4>
          <p>{photo.text}</p>
        </Description>
      </ImageWrapper>      
    </Paper>
  )
  return(
    <PhotosWrapper> { photos } </PhotosWrapper>
      
  )
}