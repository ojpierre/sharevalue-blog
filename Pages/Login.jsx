import axios from "axios";
import { useContext, useRef } from "react";
import { styled } from "styled-components";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("");
  background-size: cover;
`;

const LoginTitle = styled.span`
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
`;

const LoginForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const LoginFormLabel = styled.label`
  margin: 10px 0px;
  font-family: "Montserrat", sans-serif;
`;

const LoginFormInput = styled.input`
  padding: 10px;
  background-color: white;
  border: none;
`;

const LoginFormButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px;
  &:disabled{
    cursor: not-allowed;
    background-color: rgb(252, 173, 173);
  }
`;

const LoginRegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
`;

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <Container>
      <LoginTitle>LOG IN</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginFormLabel>Username</LoginFormLabel>
        <LoginFormInput
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <LoginFormLabel>Password</LoginFormLabel>
        <LoginFormInput
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <LoginFormButton type="submit" disabled={isFetching} >Login</LoginFormButton>
        </LoginForm>
        <LoginRegisterButton ><Link to="/register"  >Register</Link></LoginRegisterButton>
      
    </Container>
  );
};

export default Login;
