import { SvgIcon, Button } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useContext } from "react";
import { UserContext } from "../context/userContext";




const Navbar = ({ route, navigation, username }) => {

  // Use the context to get the user
  const {currentUser} = useContext(UserContext);
  // OTHER VARIABLES 
  const navigate = useNavigate();

  // FUNCTIONS
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.log(error);
      alert("For some reason, you can't logout, please try again later");
    }
  }

  // Style variables
  const root = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100vh',
    margin: 0,
    width: 252,
    paddingRight: '10px',
    borderRight: 'solid rgb(46, 51, 54) 2px',
  };

  const svgLogo = {
    marginLeft: 0,
    marginTop: 30,
    marginBottom: 30,
    marginRight: 20,
    height: 30,
    width: 30,
    fontSize: 30,
  };

  const svg = {
    marginLeft: 0,
    marginRight: 20,
    height: 30,
    width: 30,
    fontSize: 30,
  };

  const text = {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'none',
  };

  const button = {
    '&:hover': {
      backgroundColor: 'red',
    }
  };

  const tweetButton = {
    marginTop: 30,
    backgroundColor: 'rgb(29, 155,240)',
    width: 225,
    borderRadius: 9999,
    textTransform: 'none',
  };

  const log = () => {
    if (!currentUser) {
      return (
        <Button style={button} component={Link} to={`/auth/profile`}>
          <SvgIcon style={svg}>
            <LogoutIcon/>
          </SvgIcon>
          <a style={text}>Login</a>
        </Button>
      )
    }else {
      return (
        <Button style={button} onClick={logout}>
        <SvgIcon style={svg}>
          <LogoutIcon/>
        </SvgIcon>
        <a style={text}>Logout</a>
      </Button>
      )
    }
  }

  return (
    <div style={root}>
      <SvgIcon style={svgLogo} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill={'white'} fillRule="evenodd">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
          </path>
        </g>
      </SvgIcon>

      <Button style={button} component={Link} to="/timeline">
        <SvgIcon style={svg} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill={'white'} fillRule="evenodd"><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g>
        </SvgIcon>
        <a style={text}>Home</a>
      </Button>
      <Button style={button} component={Link} to={`/auth/profile`}>
        <SvgIcon style={svg} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" strokeWidth="1" fill={'white'} fillRule="evenodd"><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g>
        </SvgIcon>
        <a style={text}>Profile</a>
      </Button>
      {log()}
      <Button style={tweetButton}>
        <a style={text}>Tweet</a>
      </Button>
    </div>
  );
};

export default Navbar;