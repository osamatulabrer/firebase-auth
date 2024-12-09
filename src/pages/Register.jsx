import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Register = () => {

  return (
    <div className="min-h-screen my-4">
        <div className="card bg-base-100 w-full max-w-md shadow-2xl m-auto">
        <p className="text-center text-2xl font-semibold capitalize">register now</p>
          <form className="card-body" >
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
           <VisibilityOffIcon className="absolute top-12 right-4" />
            
              
              <input type= "password" placeholder="password" className="input input-bordered" required name="password" />
            
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