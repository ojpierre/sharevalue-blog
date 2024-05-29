import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"


const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("");
    background-size: cover;
`

const RegisterTitle = styled.span`
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
`

const RegisterForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

const RegisterFormLabel = styled.label`
    margin: 10px 0px;
    font-family: 'Montserrat', sans-serif;
`

const RegisterFormInput = styled.input`
    padding: 10px;
    background-color: white;
    border: none;
`

const RegisterFormButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
`

const RegisterLoginButton = styled.button`
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
`

const RegisterErrorInfo = styled.span`

`


const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false) 
        try{
        const res = await axios.post("/auth/register", {
            username,
            email,
            password
        })
            res.data && window.location.replace("login")
        } catch (err) {
            setError(true)
    }}

  return (
      <Container>
          <RegisterTitle>REGISTER</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit} >
              <RegisterFormLabel>Username</RegisterFormLabel>
              <RegisterFormInput type = "text" placeholder = "Enter your username..." onChange={e=>setUsername(e.target.value)} />              
              <RegisterFormLabel>Email</RegisterFormLabel>
              <RegisterFormInput type = "email" placeholder = "Enter your email..." onChange={e=>setEmail(e.target.value)} />
              <RegisterFormLabel>Password</RegisterFormLabel>
              <RegisterFormInput type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)} />
              <RegisterFormButton type="submit" >Register</RegisterFormButton>
              <RegisterLoginButton><Link to="/login">Login</Link></RegisterLoginButton>
              {error && <RegisterErrorInfo style={{color: "red", marginTop: "10px", marginLeft: "15px"}} >Something went wrong!</RegisterErrorInfo>}
        </RegisterForm>
    </Container>
  )
}

export default Register
