import { Canvas } from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import { useEffect, useState, useRef } from "react"

import Terrain from "./Terrain"
import Pathway from "./Pathway"

import Plant from "../components/Plant"
import Avatar from "../components/Avatar"
import PlayerMovement from "../components/PlayerMovement"

import PlantInfoPanel from "../ui/PlantInfoPanel"

import { getPlants } from "../services/api"

function Garden(){

  const [plants,setPlants] = useState([])
  const [selectedPlant,setSelectedPlant] = useState(null)

  const playerRef = useRef()

  useEffect(()=>{

    getPlants().then(data=>{
      setPlants(data)
    })

  },[])

  return(

    <div style={{display:"flex",height:"100vh"}}>

      <Canvas camera={{position:[0,12,25],fov:60}} shadows>

        <fog attach="fog" args={["#c8e6c9",40,120]} />

        <ambientLight intensity={0.7}/>

        <directionalLight
          position={[20,40,20]}
          intensity={1.5}
          castShadow
        />

        <Sky sunPosition={[100,20,100]}/>

        <OrbitControls
          minDistance={6}
          maxDistance={40}
        />

        <Terrain/>

        <Pathway/>

        <Avatar playerRef={playerRef}/>

        <PlayerMovement playerRef={playerRef}/>

        {plants.map((plant)=>(
          <Plant
            key={plant._id}
            plant={plant}
            setSelectedPlant={setSelectedPlant}
          />
        ))}

      </Canvas>

      <PlantInfoPanel plant={selectedPlant}/>

    </div>

  )
}

export default Garden