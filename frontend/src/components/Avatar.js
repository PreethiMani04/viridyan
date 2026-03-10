import { useGLTF } from "@react-three/drei"

function Avatar({ playerRef }) {

  const { scene } = useGLTF("/models/plants/person.glb")

  return (

    <primitive
      ref={playerRef}
      object={scene}
      scale={2}
      position={[0,0,5]}
    />

  )
}

export default Avatar