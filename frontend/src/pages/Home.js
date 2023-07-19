import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TrendingTopics />
      <Footer />
    </div>
  );
};

export default Home;
