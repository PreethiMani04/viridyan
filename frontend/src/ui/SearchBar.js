function SearchBar({ setSearch }) {

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <input
        placeholder="Search disease..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );

}

export default SearchBar;