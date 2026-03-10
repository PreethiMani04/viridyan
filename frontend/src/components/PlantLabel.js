import { Html } from "@react-three/drei";

function PlantLabel({ name }) {

  return (
    <Html distanceFactor={20}>
      <div
        style={{
          background: "white",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "600"
        }}
      >
        {name}
      </div>
    </Html>
  );

}

export default PlantLabel;