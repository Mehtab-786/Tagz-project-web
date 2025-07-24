import ProductShowcase from "../components/HomeComponents/ProductShowcase";
import HeroSection from "../components/HomeComponents/HeroSection";
import VideoSection from "../components/HomeComponents/VideoSection";
import Testimonials from "../components/HomeComponents/Testimonials";
function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <VideoSection />
      <ProductShowcase />
      <Testimonials />
    </div>
  );
}

export default Home;
