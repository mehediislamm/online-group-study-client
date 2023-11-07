import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    
    const { _id, title, description, marks, image, level } = details;

    return (
        <div>
            <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 bg-orange-100  shadow-xl">
                <div className=""><img className="md:w-72 w-full" src={image} alt="Movie" /></div>
                <div className=" ">
                    <h2 className="text-2xl text-center font-bold">{title}</h2>
                    <p className=" font-serif text-center mb-4 mr-4">{description}</p>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-serif mb-5 ml-4">Marks: {marks}</h1>
                        <h1 className="text-xl font-serif mr-4"> difficulty-level: {level}</h1>
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