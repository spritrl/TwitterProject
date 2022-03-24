import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Auth/Login/Login';
import Hold from './components/hold/Hold';
import Auth from './components/Auth/Auth';
import Register from './components/Auth/Register/Register';
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Hold />} />
        <Route path="auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
