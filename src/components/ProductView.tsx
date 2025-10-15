import clsx from "clsx";
import useMacBookStore from "../store";
import { Canvas } from "@react-three/fiber";

import StudioLight from "./models/StudioLight";

import ModelSwitcher from "./models/three/ModelSwitcher"
import { useMediaQuery } from "react-responsive";
interface Props {}

function ProductView(props: Props) {
  const {} = props;
  const { color, setColor, scale, setScale } = useMacBookStore();
  const isMobile=useMediaQuery({query:'(max-width:1024px)'})
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">
          MacBook Pro {scale}” in {color}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 4], fov: 50, near: 0.1, far: 10000 }}
      >
        <StudioLight/>
        {/* <MacBookModel14 position={[0, 0, 0]} scale={0.06}/> */}
        {/* <Box position={[0, 0, 0]} scale={10 * scale}></Box> */}
        <ModelSwitcher scale={isMobile?scale-0.03:scale} isMobile={isMobile}/>
      </Canvas>
    </section>
  );
}

export default ProductView;
