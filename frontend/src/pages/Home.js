import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-full bg-[#e5e7eb]">
        <HeroBanner/>
        <TrendingTopics />
      </div>
      <Footer />
    </>
  );
};

export default Home;
