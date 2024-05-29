import { styled } from "styled-components"
import Sidebar from "../Components/Sidebar"
import SinglePost from "../Components/SinglePost"


const Container = styled.div`
    display: flex;
`


const Single = () => {
  return (
      <Container>
        <SinglePost />
        <Sidebar />
    </Container>
  )
}

export default Single
