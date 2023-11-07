import { useLoaderData } from "react-router-dom";
import SubmitedAssignments from "./SubmitedAssignments";

const SubmitedAssignment = () => {
    const assignments = useLoaderData();
    // console.log(assignments);

    const handelComplite = id=>{

        fetch(`http://localhost:5000/api/v1/submited-all-assignment/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'complite'})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update data
            }
        })
    }


    return (
        <div>
            {
                assignments.map(assignment=>
                <SubmitedAssignments key={assignment._id} 
                assignment={assignment}
                handelComplite={handelComplite}
                ></SubmitedAssignments>)
            }
        </div>
    );
};

export default SubmitedAssignment;