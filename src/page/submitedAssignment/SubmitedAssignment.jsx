import { useLoaderData } from "react-router-dom";
import SubmitedAssignments from "./SubmitedAssignments";

const SubmitedAssignment = () => {
    const assignments = useLoaderData();
    // console.log(assignments);
    return (
        <div>
            {
                assignments.map(assignment=>
                <SubmitedAssignments key={assignment._id} 
                assignment={assignment}></SubmitedAssignments>)
            }
        </div>
    );
};

export default SubmitedAssignment;