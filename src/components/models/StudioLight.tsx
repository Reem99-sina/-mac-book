import { Environment, Lightformer } from "@react-three/drei";

interface Props {}

function StudioLight(props: Props) {
  const {} = props;

  return (
    <group name="light">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form={"rect"}
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotateY={Math.PI/2}
          />
          <Lightformer
            form={"rect"}
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotateY={Math.PI/2}
          />
        </group>
      </Environment>
      
    </group>
  );
}

export default StudioLight;
