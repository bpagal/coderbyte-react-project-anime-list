const Toolbar = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex">
        <h2>Filter</h2>
        <h1 className="text-3xl">⭐</h1>
        <h1 className="text-3xl">❤️</h1>
      </div>
      <input type="text" placeholder="Search anime" />
      <h2 className="text-lg">8 results</h2>
    </div>
  );
};

export default Toolbar;
