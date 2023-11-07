import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import FeaturCards from "../featurCards/FeaturCards";
import Qustion from "../Qustion/Qustion";
import sideimg from '../../assets/section.jpg.png'

const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <Banner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    cards.map(card => <FeaturCards key={card._id} card={card}></FeaturCards>)
                }
            </div>


            <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="lg:h-full">
                    <Qustion></Qustion>
                </div>
                <div data-aos="fade-up"
     data-aos-duration="3000">
                    <img className="md:h-full" src={sideimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;