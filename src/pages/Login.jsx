import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Login = () => {
 
  
  return (
     <div className="min-h-screen my-4">

      <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto">
        <form className="card-body" >
          <p className="text-center text-2xl font-semibold capitalize">log in here</p>
          <div className="form-control">

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input  type="email" placeholder="email" className="input input-bordered" required name="email"/>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <VisibilityOffIcon className="absolute top-12 right-4" /> 
           
            
            <input type="password" placeholder="password" className="input input-bordered" required name="password" />
              
            <label className="label">
              <a  className="label-text-alt link link-hover">Forgot password?</a>
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
           
        </form>
      </div>
     </div>
 
  )
}

export default Login