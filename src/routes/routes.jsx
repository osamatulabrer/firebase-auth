import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/Home',
                element:<Home/>
            },
            {
                path:'/Login',
                element:<Login/>
            },
            {
                path:'/Register',
                element:<Register/>
            },
        ]
    }
])
export {router}