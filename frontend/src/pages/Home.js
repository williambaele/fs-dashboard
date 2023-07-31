import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-[#e5e7eb] overflow-y-auto">
        <HeroBanner />
        <TrendingTopics />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
