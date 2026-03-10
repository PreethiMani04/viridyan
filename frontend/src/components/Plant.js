import PlantModel from "./PlantModel"

function Plant({ plant, setSelectedPlant }) {

  return (

    <group
      position={[
        plant.position?.x || 0,
        plant.position?.y || 0,
        plant.position?.z || 0
      ]}
      onClick={(e)=>{
        e.stopPropagation()
        setSelectedPlant(plant)
      }}
    >

      <PlantModel model={plant.model} />

    </group>

  )

}

export default Plant