import { styled } from "styled-components"
import Header from "../Components/Header"
import Posts from "../Components/Posts"
import Sidebar from "../Components/Sidebar"
import Dashboard from "./Dashboard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Container = styled.div`
  display: flex;
`

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const {search}= useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
  <>
      <Header />
      <Dashboard />
      <Container>
        <Posts posts={ posts } />
        <Sidebar />
      </Container>
  </>
  )
}

export default Homepage
