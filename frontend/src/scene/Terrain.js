import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Terrain() {

  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/grass.jpg"
  );

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(30, 30);

  return (

    <mesh rotation={[-Math.PI / 2, 0, 0]}>

      <planeGeometry args={[200, 200]} />

      <meshStandardMaterial map={texture} />

    </mesh>

  );

}

export default Terrain;