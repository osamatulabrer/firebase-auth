import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase/googleAuth/firebase.init";
import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Register = () => {
  const [err,setErr] = useState('')
  const [show, setShow] = useState(false)
  const handleSubmit = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const term = e.target.term.checked;
   
    
    
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    setErr('')
    if(!term){
      setErr('please check our term')
    
    }
    if(!regex.test(password)){
      setErr('password should be at least 6 character')
      return;
    }
  

    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    console.log(result);
    sendEmailVerification(auth.currentUser)
  .then(() => {
    alert('Email verification sent!')
   
  });
  updateProfile(auth.currentUser, {
    displayName:name, photoURL: photo
  }).then(() => {
    console.log('update');
    
    e.target.reset()
  
  })
    
  })
  .catch((error) => {
   setErr(error.message)
   
  });
    
  };
  return (
    <div className="min-h-screen my-4">
        <div className="card bg-base-100 w-full max-w-md shadow-2xl m-auto">
        <p className="text-center text-2xl font-semibold capitalize">register now</p>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" required name="name"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input type="text" placeholder="photo URL" className="input input-bordered" required name="photo"/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required name="email"/>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {show ? <VisibilityOffIcon className="absolute top-12 right-4" onClick={() =>(setShow(!show))}/> :  <RemoveRedEyeIcon className="absolute top-12 right-4" onClick={() =>(setShow(!show))}/>}
            
              
              <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required name="password" />
                {err && <span className="text-red-500 my-2">{err}</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  if you have an account?please <Link to='/login'>log in</Link> 
                </a>
              </label>
            </div>
            <label className="cursor-pointer label justify-start">
              <input name='term' type="checkbox" className="checkbox checkbox-accent mr-2" />
              <span className="label-text">Remember me</span>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
    </div>
     
     
 
  )
}

export default Register