/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import swal from "sweetalert";


const AssignmentCards = ({ allAssignment, update, setUpdate }) => {

    const { _id, title,  marks, image, level } = allAssignment;



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

        // Swal.fire({
        //     title: "Are you sure",
        //     text: "you wont be able to revert this",
        //     inputValue:'mark',
        //     icon:"worning",
        //     showCancelButton:true,
        //     confirmButtonColor:"#3085d6",
        //     cancelButtonColor:"#d33",
        //     confirmButtonText:"yes, deltet it", 
        // })
        // end 
        



    }


    
    return (
        <div className="bg-yellow-400" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className=" bg-yellow-400 card h-[100vh]   shadow-xl">
                <figure><img className=" h-[72vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-red-500 ">
                        {title}
                    </h2>
                    <div className="card-actions justify-between my-5 mb-5">
                        <p className="text-xl font-serif font-bold text-white"> level: <span className="text-red-400">{level}</span></p>
                        <div>
                            <p className="text-xl font-serif font-bold text-white">Marks: <span className="text-red-400">{marks}</span></p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-3">
                        <button onClick={()=> handleDelete(allAssignment._id)} className="btn btn-accent btn-sm">Delete</button>
                    </div>
                    
                    <div className="flex justify-between">
                        <Link to={`/details/${_id}`}><button className="btn btn-error ">View Assignment</button></Link>
                       <Link to={`/updateassignment/${_id}`}> <button className="btn btn-error">Update Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCards;