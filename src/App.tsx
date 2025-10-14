
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

interface Props {}

function App(props: Props) {
  const {} = props;

  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  );
}

export default App;
