import Banner from "./Home/Banner";
import WhyChooseUs from "./Home/WhyChooseUs";
import HowItWorks from "./Home/HowItWorks";
import NewVisaSix from "./Home/NewVisaSix";
import AboutUs from "./Home/AboutUs";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <NewVisaSix></NewVisaSix>
            
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;