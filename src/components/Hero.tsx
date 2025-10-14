

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <section id="hero">
      <h1>MacBook Pro</h1>
      <img src="/title.png" alt="mackbook title" />
      <video autoPlay loop muted src="/videos/hero.mp4" playsInline/>
      <button>Buy</button>
      <p>From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  );
}

export default Hero;
