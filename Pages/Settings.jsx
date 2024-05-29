import { styled } from "styled-components"
import Sidebar from "../Components/Sidebar"
import { SupervisedUserCircle } from "@mui/icons-material"
import Rose from "../Images/rose.jpeg"

const Container = styled.div`
    display: flex;
`

const SettingsWrapper = styled.div`
    flex: 9;
    padding: 20px;
`

const SettingsTitle = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SettingsUpdateTitle = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
`

const SettingsDeleteTitle = styled.span`
    color: red;
    font-size: 12px;
    cursor: pointer;
`

const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;
`

const SettingsPP = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

const SettingsPPImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
`

const SettingsPPLabel = styled.label`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: lightcoral;
    color: white;
    display: flex;  
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
`

const SettingsWrapperLabel = styled.label`
    font-size: 20px;
    margin-top: 20px;
`

const SettingsInput = styled.input`
    color: gray;
    margin: 10px 0px;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
`

const SettingsSubmit = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`



const Settings = () => {
  return (
    <Container>
          <SettingsWrapper>
              <SettingsTitle>
                  <SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
                  <SettingsDeleteTitle>Delete Your Account</SettingsDeleteTitle>
              </SettingsTitle>
              <SettingsForm>
                  <SettingsWrapperLabel>Profile Picture</SettingsWrapperLabel>
                  <SettingsPP>
                      <SettingsPPImg src= {Rose} alt= "" />
                      <SettingsPPLabel htmlFor= "fileInput" >
                          <SupervisedUserCircle />
                      </SettingsPPLabel>
                      <SettingsInput type= "file" id= "fileInput" style = {{display: "none"}} ></SettingsInput>
                  </SettingsPP>
                  <SettingsWrapperLabel>Username</SettingsWrapperLabel>
                  <SettingsInput type = "text" placeholder = "Pierre" />
                  <SettingsWrapperLabel>Email</SettingsWrapperLabel>
                  <SettingsInput type = "email" placeholder = "pierreouma@gmail.com" />
                  <SettingsWrapperLabel>Password</SettingsWrapperLabel>
                  <SettingsInput type="password" />
                  <SettingsSubmit>Update</SettingsSubmit>
              </SettingsForm>
      </SettingsWrapper>
      <Sidebar />
    </Container>
  )
}

export default Settings
