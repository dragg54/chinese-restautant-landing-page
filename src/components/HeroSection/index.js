import React from 'react'
import styled from 'styled-components'


export const HeroContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
  font-family:'Poppins', sans-serif;
  background-color: #2F5233;
  width: 100%;
  height: 600px;
  background-size:cover;
  object-fit: contain;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position:relative
`
export const HeroCaptionContainer = styled.div`
  width: 800px;
  
`
export const HeroCaption = styled.h1`
  font-size: 70px;
  color: white;
  margin-bottom: 0;
`
export const HeroButton = styled.button`
  width:300px;
  font-size: 20px;
  padding:14px;
  background-color: #76B947;
  color: white;
  border: none;
  box-shadow: 4px 4px 4px #76B947;poo0
`

export const HeroSubcaption = styled.p`
  font-size: 18px;
  color: gray
`
export const HeroPrimaryCaption = styled.h3`
  font-size: 30px;
  color: #76B947;
  margin-top:0
`
export const HeroImageContainer = styled.div`
  width:500px;
  height:500px;
  border:2px solid gray;
  overflow: none;
  border-radius: 50% 50%;
  box-shadow: 4px 4px 4px gray;
`
export const HeroImage = styled.img`
  width:500px;
  height:500px;
  border-radius: 50% 50%;
`
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroCaptionContainer>
        <HeroCaption>
          We satisfy your cravings that understands mandarin<br/></HeroCaption>
          <HeroPrimaryCaption>What do you want to order today?</HeroPrimaryCaption>
          <HeroSubcaption>生活很好 美味的食物</HeroSubcaption>
          <HeroButton>Browse Meals</HeroButton>
      </HeroCaptionContainer>
      <HeroImageContainer><HeroImage src='../../../chinese meal.jpg'/></HeroImageContainer>
    </HeroContainer>
  );
}

export default HeroSection
