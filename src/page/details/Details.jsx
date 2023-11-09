import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    
    const { _id, title, description, marks, image, level } = details;

    return (
        <div>
            <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 bg-red-500  shadow-xl">
                <div className=""><img className="md:w-72 w-full" src={image} alt="Movie" /></div>
                <div className=" ">
                    <h2 className="text-2xl font-mono text-center font-bold text-yellow-400">{title}</h2>
                    <p className=" font-mono text-center mb-4 mr-4 text-white">{description}</p>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-serif mb-5 ml-4 text-yellow-400">Marks: <span className="text-white">{marks}</span></h1>
                        <h1 className="text-xl font-serif mr-4 text-yellow-400"> difficulty-level: <span className="text-white">{level}</span></h1>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/submitedfrom/${_id}`}><button className="btn btn-primary mb-5">Take assignment</button></Link>
                        {/* <Link to={'/submitedfrom'}><button className="btn btn-primary mb-5">Take assignment</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;