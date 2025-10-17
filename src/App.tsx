
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductView from "./components/ProductView";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ShowCase from "./components/ShowCase";
import Preformace from "./components/Preformace";
import Features from "./components/Features";
import HighLight from "./components/HighLight";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);

interface Props {}

function App(props: Props) {
  const {} = props;

  return (
    <main className="px-5">
      <Navbar/>
      <Hero/>
      <ProductView/>
      <ShowCase/>
      <Preformace/>
      <Features/>
      <HighLight/>
      <Footer/>
    </main>
  );
}

export default App;
