
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductView from "./components/ProductView";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface Props {}

function App(props: Props) {
  const {} = props;

  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductView/>
    </main>
  );
}

export default App;
