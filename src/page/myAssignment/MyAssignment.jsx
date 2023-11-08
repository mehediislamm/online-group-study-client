import MyAssignmentCard from "./MyAssignmentCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const MyAssignment = () => {

   
    const [myAssignment, setmyAssignment] = useState([]);
    const {user} = useContext(AuthContext);
    // console.log(myassignments);
    const url = `https://online-group-study.vercel.app/api/v1/submited-all-assignment?email=${user?.email}`
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setmyAssignment(res.data);
            })

        // fetch(url,)
        // .then(res=>res.json())
        // .then(data => setUpdate(data))
    }, [url])


    return (
        <div >
            {
                myAssignment.map(myassignment =>
                    <MyAssignmentCard key={myassignment._id} myAssignment={myAssignment}
                     setmyAssignment={setmyAssignment} myassignment={myassignment} ></MyAssignmentCard>)
            }
        </div>
    );

};

export default MyAssignment;