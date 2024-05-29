import { styled } from "styled-components";
import Rose from "../Images/rose.jpeg";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  flex: 9;
`;

const SinglePostWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`;

const SinglePostImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const SinglePostTitle = styled.span`
  text-align: center;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SinglePostIcons = styled.div`
  float: right;
  font-size: 16px;
  display: flex;
  flex-direction: row;
`;

const SinglePostIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`

const EditIcon = styled.i`
  color: teal;
`;

const DeleteIcon = styled.i`
  color: tomato;
`;

const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  color: #b39656;
`;

const SinglePostAuthor = styled.span`
  margin-bottom: 20px;
`;

const SinglePostDate = styled.span`
  margin-bottom: 20px;
`;

const SinglePostDesc = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;
  &:first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const SinglePost = () => {
  const location = useLocation()
  const path = (location.pathname.split("/")[2])
  const [post, setPost] = useState({})


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    };
    getPost()
  }, [path])

  return (
    <Container>
      <SinglePostWrapper>
        {post.photo && (
        <SinglePostImg src={post.photo} alt="" />)}
        <SinglePostTitle>{ post.title }</SinglePostTitle>
        <SinglePostIcons>
          <SinglePostIcon>
            <EditIcon>
            <Edit /></EditIcon>
          </SinglePostIcon>
          <SinglePostIcon>
            <DeleteIcon>
            <Delete /></DeleteIcon>
          </SinglePostIcon>
        </SinglePostIcons>
        <SinglePostInfo>
          <SinglePostAuthor>Author: <Link to={`/?user=${post.username}` } style = {{textDecoration : "none", color : "inherit"}} > { post.username }</Link></SinglePostAuthor>
          <SinglePostDate>{ new Date(post.createdAt).toDateString() }</SinglePostDate>
          <SinglePostDesc>{post.desc}
          </SinglePostDesc>
        </SinglePostInfo>
      </SinglePostWrapper>
    </Container>
  );
};

export default SinglePost;
