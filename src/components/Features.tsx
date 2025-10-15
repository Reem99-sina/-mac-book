import { Canvas } from "@react-three/fiber";
import StudioLight from "./models/StudioLight";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import MacBookModel from "./models/Macbook";
import useMacBookStore from "../store";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ModelScroll = () => {
  const groupScroll = useRef(null);
  const isMobile = useMediaQuery({ query: "(min-width: 1024px)" });
  const { setTexture } = useMacBookStore();
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        crossOrigin: "Anonymous",
        loop: true,
        muted: true,
        preload: true,
        playsInline: true,
      });
      v.load();
      //   v.play();
    });
  }, []);
  useGSAP(() => {
    const modelTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    if (groupScroll.current) {
      modelTimeLine.to((groupScroll.current as any).rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }
    timeline2
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);
  return (
    <group ref={groupScroll}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacBookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

function Features() {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLight />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <span className="text-white">{feature.highlight}</span>
            {feature.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
