export const addBeer = beer => {
  return {
    type: 'ADD_BEER',
    beer
  };
};

export const removeBeer = id => {
  return {
    type: 'REMOVE_BEER',
    id
  };
};
