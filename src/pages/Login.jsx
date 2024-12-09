

import { useRef, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import {  sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/googleAuth/firebase.init";

const Login = () => {
  const emailRef = useRef()
  const [show, setShow] = useState(false)
  const [err,setErr] = useState('')
  const handleSubmit = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErr('')
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      if(!result.user.emailVerified){
        alert('please varify your email')
      }
     console.log(result);
     
    })
    .catch((error) => {
     console.log(error);
     setErr(error.message)
     
    });
    
  };
  const handleReset = (e)=>{
    const email = emailRef.current.value
    if(email){

      sendPasswordResetEmail(auth, email)
    .then((result) => {
     console.log(result);
     
    })
    .catch((error) => {
     console.log(error);
     
    });
    }
    
  }
  return (
     <div className="min-h-screen my-4">

      <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <p className="text-center text-2xl font-semibold capitalize">log in here</p>
          <div className="form-control">

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required name="email"/>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            {show ? <VisibilityOffIcon className="absolute top-12 right-4" onClick={() =>(setShow(!show))}/> :  <RemoveRedEyeIcon className="absolute top-12 right-4" onClick={() =>(setShow(!show))}/>}
           
            
            <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required name="password" />
              
            <label className="label">
              <a  onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
              if you don&apos;t have an account?please <Link to='/register'>sign up</Link> 
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
            {err && <p className="text-sm text-red-500 py-2">your password or email are invalid</p>}
        </form>
      </div>
     </div>
 
  )
}

export default Login