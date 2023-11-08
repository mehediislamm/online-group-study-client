import AssignmentCards from "./AssignmentCards";
import {  useEffect, useState } from "react";
import axios from "axios"
import { useLoaderData } from "react-router-dom";


const Assignments = () => {
    const [ update, setUpdate] = useState([])

    const totalCount = useLoaderData()
    console.log(totalCount);
    
    const url = `https://online-group-study.vercel.app/api/v1/all-assignment`
    useEffect(()=>{

       axios.get(url, )
       .then(res=>{
            setUpdate(res.data);
       })

        // fetch(url,)
        // .then(res=>res.json())
        // .then(data => setUpdate(data))
    },[url])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                update.map(allAssignment=>
                     <AssignmentCards 
                     key={allAssignment._id} update={update} setUpdate={setUpdate} allAssignment={allAssignment} ></AssignmentCards>)
            }
        </div>
    );
};

export default Assignments;