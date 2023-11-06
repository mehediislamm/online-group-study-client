import { useLoaderData } from "react-router-dom";
import AssignmentCards from "./AssignmentCards";
import { useState } from "react";

const Assignments = () => {
    const allAssignments = useLoaderData();
    const [ update, setUpdate] = useState(allAssignments)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                update.map(allAssignment=>
                     <AssignmentCards 
                     key={allAssignment._id} allAssignments={allAssignments} setUpdate={setUpdate} allAssignment={allAssignment} ></AssignmentCards>)
            }
        </div>
    );
};

export default Assignments;