import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import { color } from '@mui/system';
import { styled } from '@material-ui/core';

const Login = () => {

// !Use context 
const {signIn} = useContext(UserContext);
console.log("signIn", signIn);

// ! the style variables
const paperStyle = {
  padding: 20,
  height: '70vh',
  width: 400,
  margin: "20px auto",
  backgroundColor: 'white',
  border: 'solid white 2px',
  borderRadius: '20px',
}
const avatarStyle = {
  backgroundColor:'#2ddead'
}
const textField = {
padding: "10px 0",
color: 'white',
}
// ! The useState variable 
const [validation, setValidation] = useState()

// !useRef variable
const inputs = useRef([]);
const formRef = useRef();
// ! the other variables
const navigate = useNavigate();

//   !functions
const addInputs = el => {
if (el && !inputs.current.includes(el) && el.tagName.toLowerCase() === 'input') {
    inputs.current.push(el)
}
}

// !this function is used for signup
const handelForm = async (e) => {
e.preventDefault()

try {
  const cred = await signIn(
    inputs.current[0].value, 
    inputs.current[1].value
  );
  // formRef.current.reset();
  setValidation("");
  console.log(cred);
  navigate(`/auth/profile?username=${cred.user.email}`);
} catch (error) {
    console.dir(error);
    setValidation("Wrong credentials");
} 
}

const link = {
textDecoration: 'none',
padding: "20px auto",
color: "blue"
}
const button = {
margin:"20px 0"
}
const MyTitle = styled('h2')({
  color: 'black',
});


return (
<Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}><LockIcon/></Avatar>
            <MyTitle>Sign in</MyTitle>
        </Grid>
        <form ref={formRef} onSubmit={handelForm}>
            <TextField inputRef={addInputs} name='username' style={textField} label='Username' placeholder='Enter mail OR username' fullWidth required/>
            <TextField inputRef={addInputs} name='psw' style={textField} label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <p style={{color:'red'}}>{validation}</p>
            <Button style={button} fullWidth type='submit' variant="contained">Sign In</Button>
            <Link style={link} to="register">Sign Up</Link>
        </form>
    </Paper>
</Grid>
)
}

export default Login