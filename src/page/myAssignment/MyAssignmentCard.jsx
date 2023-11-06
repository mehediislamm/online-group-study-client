/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyAssignmentCard = ({allAssignment: myassignment}) => {
    const { _id, title,  marks, image, level } = myassignment;
    return (
        <div>
            <div className="card h-[132vh]  bg-base-100 shadow-xl">
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
                        <button className="btn btn-accent">Delete</button>
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

export default MyAssignmentCard;