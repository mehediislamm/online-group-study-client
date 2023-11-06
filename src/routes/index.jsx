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
// import FeaturCards from "../page/featurCards/FeaturCards";




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
        // {
        //     path:'/featurcards',
        //     element:<FeaturCards></FeaturCards>,
        //     loader:()=> fetch("http://localhost:5000/api/v1/features-cards")
            
        // },
        {
            path:'createassignment',
            element:<CreateAssignment></CreateAssignment> 
        },
        {
            path:'/updateassignment/:id',
            element:<UpdateAssignment></UpdateAssignment>,
            loader:({params})=> {
              // console.log(params);
                   return fetch(`http://localhost:5000/api/v1/update-assignment/${params.id}`)
             
            }
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=> {
              // console.log(params);
                   return fetch(`http://localhost:5000/api/v1/update-assignment/${params.id}`)
             
            }
        },
        {
            path:'assignments',
            element:<Assignments></Assignments> ,
            loader: ()=> fetch("http://localhost:5000/api/v1/all-assignment")
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