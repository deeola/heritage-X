export const myCountries = () => {
  return {
    type: "COUNTRIES",
  };
};

export const Arabs = () => {
  return {
    type: "ARAB",
  };
};

export const Africa = () => {
  return {
    type: "AFRICA",
  };
};

export const Latino = () => {
  return {
    type: "LATINO",
  };
};

export const Europe = () => {
  return {
    type: "EUROPE",
  };
};

export const Asia = () => {
  return {
    type: "ASIA",
  };
};

export const Continent = (continent) => {
  return {
    type: "CONTINENT",
    payload: continent,
  };
};
