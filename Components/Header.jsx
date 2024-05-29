import { styled } from "styled-components"
import Rose from "../Images/rose.jpeg"

const Container = styled.div`
    margin-top: 60px;
`

const HeaderTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: #444;    
`

const HeaderTitleSm = styled.span`
    position: absolute;
    top: 18%;
    font-size: 20px;
`

const HeaderTitleLg = styled.span`
    position: absolute;
    top: 20%;
    font-size: 100px;
`

const HeaderImg = styled.img`
    width: 100%;
    height: 450px;
    margin-top: 80px;
    object-fit: cover;
`


const Header = () => {
  return (
    <Container>
        <HeaderTitles>
            <HeaderTitleSm>Freelancing in Kenya</HeaderTitleSm>
            <HeaderTitleLg>Blog</HeaderTitleLg>
        </HeaderTitles>
        <HeaderImg src={Rose} alt="" />
    </Container>
  )
}

export default Header
