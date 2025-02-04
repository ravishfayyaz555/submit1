import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
