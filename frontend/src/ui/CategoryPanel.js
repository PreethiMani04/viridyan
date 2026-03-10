function CategoryPanel() {

  return (

    <div
      style={{
        position: "absolute",
        top: "70px",
        left: "20px",
        background: "white",
        padding: "10px",
        borderRadius: "8px"
      }}
    >

      <button>All Plants</button>
      <button>Balcony</button>
      <button>Terrace</button>
      <button>Small Garden</button>

    </div>

  );

}

export default CategoryPanel;