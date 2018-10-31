export const addBeer = beer => {
  return {
    type: 'ADD_BEER',
    beer
  };
};

export const getBeers = beers => {
  return {
    type: 'GET_BEERS',
    beers
  }
}

export const removeBeer = id => {
  return {
    type: 'REMOVE_BEER',
    id
  };
};

export const upvoteBeer = beer => {
  return {
    type: 'UPVOTE_BEER',
    beer
  }
}
