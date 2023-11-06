import { useLoaderData } from "react-router-dom";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignment = () => {
   
        const myassignments = useLoaderData();
        // console.log(myassignments);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                myassignments.map(myassignment=>
                     <MyAssignmentCard key={myassignment._id} allAssignment={myassignment} ></MyAssignmentCard>)
            }
        </div>
    );
    
};

export default MyAssignment;