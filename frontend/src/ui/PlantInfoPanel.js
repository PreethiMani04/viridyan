function PlantInfoPanel({plant}){

  if(!plant) return <div style={{width:300}}>Select plant</div>

  return(

    <div style={{width:300,padding:20,background:"#f1f8e9"}}>

      <h2>{plant.commonName}</h2>

      <p><b>Botanical:</b> {plant.botanicalName}</p>

      <p><b>Diseases:</b> {plant.diseases.join(", ")}</p>

      <p><b>Uses:</b> {plant.uses}</p>

      <p><b>Parts Used:</b> {plant.partsUsed}</p>

      <p><b>Recipe:</b> {plant.recipes.join(", ")}</p>

    </div>

  );

}

export default PlantInfoPanel;