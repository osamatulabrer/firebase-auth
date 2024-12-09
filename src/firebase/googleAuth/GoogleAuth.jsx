import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {auth} from './firebase.init'
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

function GoogleAuth() {
  const [user,setUser] = useState(null)
  

const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleClick = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(result => {
      setUser(result.user)
      
    }).catch(error =>{
      setUser(null);
      
    })
    
  }
  const handleLogOut = ()=>{
    signOut(auth).then(() => {
      alert('log out success');
      
    }).catch((error) => {
     console.log(error);
     
    });
  }

  const handleGithub = ()=>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      console.log(result);
      setUser(result.user)
      
    }).catch(error =>{
      console.log((error));
      setUser(null)
      
    })
  }


  return (
    <div className="h-screen ">
     {user ?  <button onClick={handleLogOut}>log out</button>: 
     <>
      <button className="m-auto" onClick={handleClick}>log in with google</button>
      <br/>
      <br/>
      <button className="m-auto" onClick={handleGithub}>log in with github</button>
     </>
      }
    
     {user && 
     <div>

       <h1>{user.displayName}</h1>
       <p>{user.email}</p>
       
       <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
     </div>
     }
    
    </div>
  )
}

export default GoogleAuth
