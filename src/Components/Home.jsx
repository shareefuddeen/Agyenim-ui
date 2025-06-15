import AboutUs from "../Components/AboutUs";
import Campaigns from "../Components/Campaigns";
import Carousel from "../Components/Carousel";
import Events from "../Components/Events";
import Hero from "../Components/Hero";
import Community from "../Components/Comunity";
import Team from "../Components/Team";
import FaQ from "../Components/FaQ";
import Change from "./Change";
import Footer from "../Components/Footer";
import Announcement from "./Announcement";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Community />
            <Announcement />
            <AboutUs />
            <Team />
            <Carousel />
            <Campaigns />
            <Events />
            <Change />
            <FaQ />
            <Footer />
        </div>
    );
};

export default Home;
