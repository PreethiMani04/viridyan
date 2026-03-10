import { useGLTF } from "@react-three/drei";

function PlantModel({ model }) {

  const { scene } = useGLTF(`/models/plants/${model}`);

  return (

    <primitive
      object={scene}
      scale={2}
    />

  );

}

export default PlantModel;