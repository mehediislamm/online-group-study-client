/* eslint-disable react/prop-types */



const FeaturCards = ({ card }) => {
    const { image_url } = card;

    return (
        <div>
            <div >
                <div className="card rounded-xl h-72  bg-base-100 shadow-xl">
                    
                    <figure><img  className="h-72 w-full" src={image_url} alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default FeaturCards;