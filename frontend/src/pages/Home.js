import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Steps from "../components/Steps";

const Home = () => {


  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <Steps/>
      <Footer />
    </div>
  );
};

export default Home;
