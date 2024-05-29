import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 60vh;
`

const SidebarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SidebarTitle = styled.span`
    margin: 10px;   
    padding: 5px;
    width: 80%;
    border-top: 1px solid #a7a4a4;
    border-bottom: 1px solid #a7a4a4;
    font-family: 'Montserrat', sans-serif;
    color: #222;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
`

const SidebarImg = styled.img`
    margin-top: 15px;
` 

const SidebarDesc = styled.p`
    padding: 30px;
`

const SidebarList = styled.ul`
    list-style: none;
    margin-bottom: 30px;
`

const SideBarListItem = styled.li`
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
`

const SocialContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.div`
  font-size: 16px;
  color: white;
  background-color: #${(props) => props.color};
  margin-left: 10px;
  cursor: pointer;
`;

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])


  return (
    <Container>
        <SidebarItem>
            <SidebarTitle>ABOUT ME</SidebarTitle>
            <SidebarImg src = "" alt = "" />
            <SidebarDesc>I write alotta stuff</SidebarDesc>
        </SidebarItem>
        <SidebarItem>
            <SidebarTitle>CATEGORIES</SidebarTitle>
              <SidebarList>
                  {cats.map((c) => (
                      <Link to={`/?cat=${c.name}`} style = {{textDecoration : "none", color : "inherit"}}>
                          <SideBarListItem>{c.name}</SideBarListItem>
                          </Link>
            ))}</SidebarList>
        </SidebarItem>
        <SidebarItem>
            <SidebarTitle>FOLLOW US</SidebarTitle>
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
        </SidebarItem>
    </Container>
  )
}

export default Sidebar
