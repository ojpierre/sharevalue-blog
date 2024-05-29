import { styled } from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import Rose from "../Images/rose.jpeg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

const Container = styled.div`
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    z-index: 9999;
    background-color: white;
`

const TopLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const TopCenter = styled.div`
    flex: 6;
`

const TopList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
`

const TopListItem = styled.li`
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
`

const TopRight = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TopImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const TopRightIcon = styled.i`
    font-size: 18px;
    color: #666;
    cursor: pointer;
    margin-left: 15px;
`

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    <Container>
        <TopLeft>
            <SocialContainer>
            <SocialIcon color="3b5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="e4405f">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55acee">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="e60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </TopLeft>
        <TopCenter>
          <TopList>
            <TopListItem><Link  to = "/" style = {{textDecoration : "none", color : "inherit"}} >HOME</Link></TopListItem>
            <TopListItem><Link  to = "/about" style = {{textDecoration : "none", color : "inherit"}} >ABOUT</Link></TopListItem>
            <TopListItem><Link  to = "/contact" style = {{textDecoration : "none", color : "inherit"}} >CONTACT</Link></TopListItem>
            <TopListItem><Link  to = "/write" style = {{textDecoration : "none", color : "inherit"}} >WRITE</Link></TopListItem>
            <TopListItem onClick={handleLogout} >{user && "LOGOUT"}</TopListItem>
          </TopList>
        </TopCenter>
        <TopRight>
        {user ? (<TopImage src={Rose} alt="" />) : 
          <>
          <TopList>
            <TopListItem><Link to="/login" style={{ textDecoration: "none", color: "inherit" }} >LOGIN</Link></TopListItem>
          </TopList>
          <TopList>
            <TopListItem><Link to="/register" style={{ textDecoration: "none", color: "inherit" }} >REGISTER</Link></TopListItem>
            </TopList>
            </>
          }
          <TopRightIcon><SearchIcon /></TopRightIcon>
        </TopRight>
    </Container>
  )

  }
export default TopBar;
