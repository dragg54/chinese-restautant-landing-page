import styled from 'styled-components'

export const HeaderLogoContainer = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 10px
`
export const HeaderLogo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Tapestry&display=swap');
    font-size: 24px;
    color: #2F5233;
    font-family: 'Tapestry',cursive;
    margin-bottom: 0;
`
export const HeaderLogoDescription = styled.p`
    font-size: 14px;
    color:#FF2768;
    margin-top: 0;
`

export const IconContainer = styled.div`
    width: 200px;
    height:100% ;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    fill: black;
`