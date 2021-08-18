const Countries = (state = [], action) => {
  const getAll = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();

    console.log(items);
  };
  switch (action.type) {
    case "COUNTRIES":
      return getAll();
    default:
      return state;
  }
};

export default Countries;
