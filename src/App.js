import React,{useState,useEffect} from 'react';
import './App.css';
import Pin from "./components/Pin.jsx";

function App() {
  const [otp, setOtp] = useState("");
  const [demoOTP, setDemoOTP] = useState('');
  useEffect(() => {
    document.title = "hello"
    }, [])
  return (
    <div className="App">
      <Pin length={5} onChange={(value)=>{setOtp(value)}} demoOTP={demoOTP}/>

      <h1>OTP value is :{otp}</h1>
      <p>
        Enter Demo OTP:
        <input type="text" onChange={(e)=>setDemoOTP(e.target.value)} maxLength={5} style={{width:"6rem"}}/>
      </p>
    </div>
  );
}

export default App;
