import { Avatar, Button, Checkbox, FormControlLabel, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';

const Login = () => {

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
    margin: "10px 0"
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
                <h2>Sign in</h2>
            </Grid>
                   {/* <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl> */}
            <FormControl fullWidth>
              <TextField name='username' style={textField} label='Username' placeholder='Enter mail OR username' fullWidth required/>
              <TextField name='psw' style={textField} label='Password' placeholder='Enter password' type='password' fullWidth required/>
              <FormControlLabel control={<Checkbox  />} label="Remember me" />
              <Button style={button} fullWidth type='submit' variant="contained">Sign in</Button>
              <Link style={link} to="register">Sign Up</Link>
            </FormControl>
        </Paper>
    </Grid>
  )
}

export default Login