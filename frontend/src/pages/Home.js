import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import HomeBrands from "../components/HomeBrands";

const Home = () => {


  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <Steps/>
      <HomeBrands/>
      <Footer />
    </div>
  );
};

export default Home;
