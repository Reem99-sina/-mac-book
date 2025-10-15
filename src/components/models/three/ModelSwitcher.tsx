import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacBookModel16 from "../Macbook-16";
import MacBookModel14 from "../Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

interface Props {
  scale: number;
  isMobile?: boolean;
}
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (
  group: THREE.Group | THREE.Object3D | null,
  opacity: number
) => {
  if (!group) return;
  group.traverse((child: any) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity: opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

const moveGroup = (group: THREE.Group | THREE.Object3D | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, {
    x: x,
    duration: ANIMATION_DURATION,
  });
};

function ModelSwitcher(props: Props) {
  const { scale, isMobile } = props;
  const smallMacbookRef = useRef(null);
  const largeMacbookRef = useRef(null);
  const smallLargeMacbook = scale == 0.08 || scale == 0.05;
  const controlsConfig: any = {
    snap: true,
    speed: 1,
    zoom: 1,
    // polar: [-Math.PI , Math.PI ],
    azimuth: [-Infinity, Infinity],
  };
  useGSAP(() => {
    if (smallLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(largeMacbookRef.current, 1);
      fadeMeshes(smallMacbookRef.current, 0);
    } else {
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);
      moveGroup(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 0);
      fadeMeshes(smallMacbookRef.current, 1);
    }
  }, [scale]);
  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
}

export default ModelSwitcher;
