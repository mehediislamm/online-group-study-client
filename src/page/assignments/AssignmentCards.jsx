/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AssignmentCards = ({ allAssignment }) => {
    const { _id, title,  marks, image, level } = allAssignment;
    return (
        <div>
            <div className="card h-[120vh]  bg-base-100 shadow-xl">
                <figure><img className=" h-[72vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="card-actions justify-between">
                        <p>{level}</p>
                       
                    </div>
                    <div>Marks: {marks}</div>
                    <div className="flex justify-between">
                        <button className="btn btn-error">View Assignment</button>
                       <Link to={`/updateassignment/${_id}`}> <button className="btn btn-error">Update Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCards;