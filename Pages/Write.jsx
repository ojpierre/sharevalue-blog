import { Add } from "@mui/icons-material";
import { useState } from "react";
import { styled } from "styled-components";
import Rose from "../Images/rose.jpeg";

const Container = styled.div`
  padding: 50px;
`;

const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

const WriteForm = styled.form`
  position: relative;
`;

const WriteFormGroup = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

const WriteFormGroupLabel = styled.label``;

const WriteFormGroupIcon = styled.i`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgb(121, 118, 118);
  cursor: pointer;
`;

const WriteFormGroupInput = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
  &:focus {
    outline: none;
  }
`;

const WriteFormGroupTextArea = styled.textarea`
  font-size: 20px;
  border: none;
  width: 100%;
  height: 100vh;
`;

const WriteFormGroupSubmit = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form validation and submission logic
    // For example, send the data to the backend API to save the blog post
    
    // Reset the form fields
    setTitle("");
    setContent("");
  };

  return (
    <Container>
      <WriteImg src={Rose} alt="" />
      <WriteForm onSubmit={handleSubmit}>
        <WriteFormGroup>
          <WriteFormGroupLabel htmlFor="fileInput"></WriteFormGroupLabel>
          <WriteFormGroupIcon>
            <Add />
          </WriteFormGroupIcon>
          <WriteFormGroupInput
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          />
          <WriteFormGroupInput
            type="text"
            placeholder="Title"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteFormGroupTextArea
            placeholder="Tell your Story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></WriteFormGroupTextArea>
          <WriteFormGroupSubmit type="submit">Publish</WriteFormGroupSubmit>
        </WriteFormGroup>
      </WriteForm>
    </Container>
  );
};

export default Write;
