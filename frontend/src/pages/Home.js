import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen items-center bg-[#e5e7eb]">
        <TrendingTopics />
      </div>
      <Footer />
    </>
  );
};

export default Home;
