import { lazy } from "react";

const ProductShowcase = lazy(() => import( "../components/HomeComponents/ProductShowcase"));
const HeroSection = lazy(() => import( "../components/HomeComponents/HeroSection"));
const VideoSection = lazy(() => import( "../components/HomeComponents/VideoSection"));
const Testimonials = lazy(() => import( "../components/HomeComponents/Testimonials"));
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
