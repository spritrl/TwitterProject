import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Hold from './components/hold/Hold';

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Hold />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
