import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Pathway() {

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/pathway.jpg"
  );

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 10);

  return (

    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.01, -40]}
    >

      <planeGeometry args={[6, 120]} />

      <meshStandardMaterial map={texture} />

    </mesh>

  );

}

export default Pathway;