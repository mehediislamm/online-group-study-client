import { useLoaderData } from "react-router-dom";
import SubmitedAssignments from "./SubmitedAssignments";
import Swal from "sweetalert2";

const SubmitedAssignment = () => {
    const assignments = useLoaderData();
    // console.log(assignments);

    const handelComplite = id => {
        Swal.fire({
            title: "Are you sure",
            text: "you wont be able to revert this",
            input:'text',
            inputLabel:'mark',
            // inputValue,
            icon:"worning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText:"Give mark", 
        })

        const object = { status: "complite" }

        fetch(`https://online-group-study.vercel.app/api/v1/submited-all-assignment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update data
                }
            })
    }


    return (
        <div>
            {
                assignments.map(assignment =>
                    <SubmitedAssignments key={assignment._id}
                        assignment={assignment}
                        handelComplite={handelComplite}
                    ></SubmitedAssignments>)
            }
        </div>
    );
};

export default SubmitedAssignment;