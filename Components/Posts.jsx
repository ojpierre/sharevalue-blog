import { styled } from "styled-components"
import Post from "./Post"

const Container = styled.div`
    flex: 6;
    display: flex;
    flex-wrap: wrap;
    margin: 40px;
`

const Posts = ({posts}) => {
  return (
    <Container>
      {posts.map((p) => (
        <Post post={ p } />
        ))}
    </Container>
  )
}

export default Posts
