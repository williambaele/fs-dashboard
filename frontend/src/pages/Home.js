import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import HomeBrands from "../components/HomeBrands";
import CategoryCards from "../components/CategoryCards";
import TrendingTopics from "../components/TrendingTopics";

const Home = () => {


  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <TrendingTopics/>
      <Steps/>
      <CategoryCards/>
      <HomeBrands/>
      <Footer />
    </div>
  );
};

export default Home;
