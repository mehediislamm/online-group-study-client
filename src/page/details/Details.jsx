import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    const { title, description, marks, image, level } = details;

    return (
        <div>
            <div className="card mb-10 card-side bg-base-100 shadow-xl">
                <figure><img className="" src={image} alt="Movie" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p className=" font-serif mb-4">{description}</p>
                    <div className="flex gap-32">
                        <h1 className="text-xl font-serif mb-5">Marks: {marks}</h1>
                        <h1 className="text-xl font-serif"> difficulty-level: {level}</h1>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={'/submitedfrom'}><button className="btn btn-primary mb-5">Take assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;