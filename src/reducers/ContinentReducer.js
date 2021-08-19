import Africa from "../components/home/Africa";

const Continentreducer = (state = [], action) => {
  const eachContinent = state.payload;

  let Data = [];
  const getContinent = async () => {
    const res = await fetch("./data.json");
    const items = await res.json();
    const filteredContinent = items.filter(
      (item) => item.region.name === eachContinent
    );

    //GET RANDOM NUMBERS
    const Num1 = Math.floor(Math.random() * filteredContinent.length);
    const Num2 = Math.floor(Math.random() * filteredContinent.length);
    const Num3 = Math.floor(Math.random() * filteredContinent.length);

    Data = [
      filteredContinent[Num1],
      filteredContinent[Num2],
      filteredContinent[Num3],
    ];

    return Data;
  };

  if (Data.length !== 0) {
    switch (action.type) {
      case "AFRICA":
        return getContinent("Africa");
      case "ARABS":
        return getContinent("Arab States");
      case "ASIA":
        return getContinent("Asia and the Pacific");
      case "EUROPE":
        return getContinent("Europe and North America");
      case "LATINO":
        return getContinent("Latin America and the Caribbean");
      default:
        return state;
    }
  }
};

export default Continentreducer;
