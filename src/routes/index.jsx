import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import AdminLayout from "../components/layout/AdminLayout";
import Error from "../page/error/Error";
import Home from "../page/home/Home";
import CreateAssignment from "../page/createAssignment/CreateAssignment";
import Assignments from "../page/assignments/Assignments";
import UpdateAssignment from "../page/updateAssignment/UpdateAssignment";
import Details from "../page/details/Details";
import SubmitedFrom from "../page/submittedFrom/SubmitedFrom";
import SubmitedAssignment from "../page/submitedAssignment/SubmitedAssignment";
import MyAssignment from "../page/myAssignment/MyAssignment";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout></AdminLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader:()=> fetch("http://localhost:5000/api/v1/features-cards")
            
        },
        
        {
            path:'createassignment',
            element:<PrivateRoute><CreateAssignment></CreateAssignment> </PrivateRoute>
        },
        {
            path:'/updateassignment/:id',
            element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
            loader:({params})=> {
              // console.log(params);
                   return fetch(`http://localhost:5000/api/v1/update-assignment/${params.id}`)
             
            }
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=> {
              // console.log(params);
                   return fetch(`http://localhost:5000/api/v1/update-assignment/${params.id}`)
             
            }
        },
        {
            path:'assignments',
            element:<Assignments></Assignments> ,
            loader: ()=> fetch("http://localhost:5000/api/v1/all-assignment")
        },
     
        {
            path:'/submitedfrom',
            element:<SubmitedFrom></SubmitedFrom>,
            loader: ()=> fetch("http://localhost:5000/api/v1/all-assignment")
        },
        // {
        //     path:'/submitedfrom/:id',
        //     element:<SubmitedFrom></SubmitedFrom>,
        //     loader:({params})=> {
        //         console.log(params);
        //              return fetch(`http://localhost:5000/api/v1/all-assignment/${params.id}`)
               
        //       }
        // },
        {
            path:'submitedassignment',
            element:<SubmitedAssignment></SubmitedAssignment>,
            loader:()=>fetch('http://localhost:5000/api/v1/submited-all-assignment')
        },
        {
            path:'myassignment',
            element:<MyAssignment></MyAssignment>,
            loader:()=>fetch('http://localhost:5000/api/v1/all-assignment')
        },

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