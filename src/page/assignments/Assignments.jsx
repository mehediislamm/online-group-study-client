import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";

const Assignments = () => {
    const allAssignments = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allAssignments.map(allAssignment=>
                     <AssignmentCards key={allAssignment._id} allAssignment={allAssignment} ></AssignmentCards>)
            }
        </div>
    );
};

export default Assignments;