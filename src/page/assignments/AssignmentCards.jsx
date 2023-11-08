/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import swal from "sweetalert";

const AssignmentCards = ({ allAssignment, update, setUpdate }) => {
    const handleDelete = (_id) => {


        fetch(`https://online-group-study.vercel.app/api/v1/all-assignment/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const filterdata = update.filter((item) => item._id !== _id);
                setUpdate(filterdata)

                if (data.deletedCount > 0) {
                   
                    swal("Delete!", "Delete assignment Successfull", "error");
                }
            });
    }


    const { _id, title,  marks, image, level } = allAssignment;
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className="card h-[100vh]  bg-base-100 shadow-xl">
                <figure><img className=" h-[72vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold ">
                        {title}
                    </h2>
                    <div className="card-actions justify-between my-5 mb-5">
                        <p className="text-xl font-serif "> difficulty-level: {level}</p>
                        <div>
                            <p className="text-xl font-serif">Marks: {marks}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-3">
                        <button onClick={()=> handleDelete(allAssignment._id)} className="btn btn-accent">Delete</button>
                    </div>
                    
                    <div className="flex justify-between">
                        <Link to={`/details/${_id}`}><button className="btn btn-error">View Assignment</button></Link>
                       <Link to={`/updateassignment/${_id}`}> <button className="btn btn-error">Update Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCards;