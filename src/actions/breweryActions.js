export const addBrewery = brewery => {
  return {
    type: 'ADD_BREWERY',
    brewery
  };
};

export const removeBrewery = id => {
  return {
    type: 'REMOVE_BREWERY',
    id
  };
};
