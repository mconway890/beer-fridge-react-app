export const addBrewery = brewery => {
  return {
    type: 'ADD_BREWERY',
    brewery
  };
};

export const getBreweries = breweries => {
  return {
    type: 'GET_BREWERIES',
    breweries
  }
}

export const removeBrewery = id => {
  return {
    type: 'REMOVE_BREWERY',
    id
  };
};

export const upvoteBrewery = brewery => {
  return {
    type: 'UPVOTE_BREWERY',
    brewery
  }
}
