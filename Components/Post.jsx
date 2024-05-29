import { styled } from "styled-components";
import Rose from "../Images/rose.jpeg"
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 400px;
  margin: 0px 25px 50px 25px;
`;

const PostImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 7px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostCategories = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const PostCategory = styled.div`
  
`;

const PostTitle = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;

const Hr = styled.hr``;

const PostDate = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`;

const PostDesc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const Post = ({post}) => {
  return (
    <Container>
      {post.photo &&(
      <PostImg src={post.photo} alt="" />)}
      <PostInfo>
        <PostCategories>{ post.categories.map((c) => (
          <PostCategory>{ c.name }</PostCategory>
        ))}</PostCategories>
        <Link to={`/post/${post._id}`} style = {{textDecoration : "none", color : "inherit"}}>
        <PostTitle>{ post.title }</PostTitle></Link>
        <Hr />
        <PostDate>{ new Date(post.createdAt).toDateString() }</PostDate>
        <PostDesc>{post.desc}
        </PostDesc>
      </PostInfo>
    </Container>
  );
};

export default Post;
