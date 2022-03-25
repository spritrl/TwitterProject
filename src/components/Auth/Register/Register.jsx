import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';
import { UserContext } from '../../../context/userContext';



const Register = () => {

// !Use context 
    const {signUp} = useContext(UserContext);
    console.log("signUp", signUp)
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
// ! The useState varibale 
  const [validation, setValidation] = useState()

  // ! the other variables
  const inputs = useRef([]);
  const addInputs = el => {
      if (el && !inputs.current.includes(el) && el.tagName.toLowerCase() === 'input') {
          inputs.current.push(el)
      }
  }

//   !functions
  const handelForm = (e) => {
    e.preventDefault()
    console.log(inputs.current[1].value);
    if (inputs.current[1].value.length || inputs.current[2].value.length < 6) {
        setValidation("6 caracters min")
        return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
        setValidation("Not the same password");
        return;
    }
    
  }
  
  
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <h2>Register</h2>
            </Grid>
                   {/* <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl> */}
            <form onSubmit={handelForm}>
                <TextField inputRef={addInputs} name='username' style={textField} label='Username' placeholder='Enter mail OR username' fullWidth required/>
                <TextField inputRef={addInputs} name='psw' style={textField} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField inputRef={addInputs} name='repeatPwd' style={textField} label='Repeat password' placeholder='Enter password' type='password' fullWidth required/>
                <p style={{color:'red'}}>{validation}</p>
                {/* <FormControlLabel control={<Checkbox  />} label="Remember me" /> */}
                <Button fullWidth type='submit' variant="contained">Sign in</Button>
            </form>

        </Paper>
    </Grid>
  )
}

export default Register