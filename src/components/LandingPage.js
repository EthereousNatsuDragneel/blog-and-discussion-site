import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import TrendingBlogs from "./Components/TrendingBlogs";
import BlogSection from "./Components/Suggested";
import Footer from "./Components/footer";
// import HeroSection from "../components/HeroSection";
// import TrendingBlogs from "../components/TrendingBlogs";
// import SuggestedBlogs from "../components/SuggestedBlogs";

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      {/* Hero Section Below Navbar */}
      <HeroSection 
        title="Bring your Imagination to life with blog-site"
        description="Experience the web as content, a seamless flow..."
        buttonText="Explore"
        bgImage="https://source.unsplash.com/1600x900/?technology,abstract"
      />
      <TrendingBlogs/>
      <BlogSection/>
      <Footer/>


   
    </div>
  );
}
