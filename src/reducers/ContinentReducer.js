import Africa from "../components/home/Africa";

const Continentreducer = (state = [], action) => {
  switch (action.type) {
    case "AFRICA":
      return 0;
    case "ARABS":
      return 1;
    case "ASIA":
      return 2;
    case "EUROPE":
      return 3;
    case "LATINO":
      return 4;
    default:
      return state;
  }
};
