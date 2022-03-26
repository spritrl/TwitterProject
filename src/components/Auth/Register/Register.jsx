import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';
import { UserContext } from '../../../context/userContext';
import { async } from '@firebase/util';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {

// !Use context 
    const {signUp} = useContext(UserContext);
    console.log("signUp", signUp);

// ! the style variables
  const paperStyle = {
      padding: 20,
      height: '70vh',
      width: 280,
      margin: "20px auto"
  }
  const avatarStyle = {
      backgroundColor:'#2ddead'
  }
  const textField = {
    padding: "10px 0"
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
    console.log(inputs.current[1].value);
    if (inputs.current[1].value.length < 6 || inputs.current[2].value.length < 6) {
        setValidation("6 caracters min")
        return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
        setValidation("Not the same password");
        return;
    }
    try {
      const cred = await signUp(
        inputs.current[0].value, 
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      console.log(cred);
      navigate("/auth/profile");
    } catch (error) {
        console.dir(error);
        if (error.code === "auth/email-already-in-use") {
            setValidation("Email already in use");
        }else if (error.code === "auth/invalid-email") {
            setValidation("Invalid email");
        }
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
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <h2>Sign Up</h2>
            </Grid>
            <form ref={formRef} onSubmit={handelForm}>
                <TextField inputRef={addInputs} name='username' style={textField} label='Username' placeholder='Enter mail OR username' fullWidth required/>
                <TextField inputRef={addInputs} name='psw' style={textField} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField inputRef={addInputs} name='repeatPwd' style={textField} label='Repeat password' placeholder='Enter password' type='password' fullWidth required/>
                <p style={{color:'red'}}>{validation}</p>
                <Button style={button} fullWidth type='submit' variant="contained">Sign Up</Button>
                <Link style={link} to="/auth">Sign In</Link>
            </form>
        </Paper>
    </Grid>
  )
}  
export default Register