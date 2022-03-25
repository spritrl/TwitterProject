import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';

const Register = () => {

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
            <FormControl fullWidth>
                <TextField name='username' style={textField} label='Username' placeholder='Enter mail OR username' fullWidth required/>
                <TextField name='psw' style={textField} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField name='repeatPwd' style={textField} label='Repeat password' placeholder='Enter password' type='password' fullWidth required/>
                {/* <FormControlLabel control={<Checkbox  />} label="Remember me" /> */}
                <Button fullWidth type='submit' variant="contained">Sign in</Button>
            </FormControl>

        </Paper>
    </Grid>
  )
}

export default Register