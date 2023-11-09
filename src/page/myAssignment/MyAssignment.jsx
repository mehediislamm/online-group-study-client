import MyAssignmentCard from "./MyAssignmentCard";
import { useLoaderData } from "react-router-dom";

const MyAssignment = () => {
    const myAssignment = useLoaderData()
   

    return (
        <div >
            {
                myAssignment.map(myassignment =>
                    <MyAssignmentCard key={myassignment._id} myAssignment={myAssignment}
                  
                      myassignment={myassignment} ></MyAssignmentCard>)
            }
        </div>
    );

};

export default MyAssignment;