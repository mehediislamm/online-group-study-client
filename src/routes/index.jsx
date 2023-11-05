import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import AdminLayout from "../components/layout/AdminLayout";
import Error from "../page/error/Error";
import Home from "../page/home/Home";
import CreateAssignment from "../page/createAssignment/CreateAssignment";




const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout></AdminLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
            
        },
        {
            path:'createassignment',
            element:<CreateAssignment></CreateAssignment>
            
        }
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
  ]);
  export default router;