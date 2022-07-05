import React,{useState,useEffect} from 'react';
import './App.css';
import Pin from "./components/Pin.jsx";

function App() {
  const [otp, setOtp] = useState("");
  useEffect(() => {
    document.title = "hello"
    }, [])
  return (
    <div className="App">
      <Pin length={4} onChange={(value)=>{setOtp(value)}}/>

      <h1>OTP value is :{otp}</h1>
    </div>
  );
}

export default App;
