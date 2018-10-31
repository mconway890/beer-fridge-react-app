export const addBeer = beer => {
  return {
    type: 'ADD_BEER',
    beer
  };
};

export const setBeers = beers => {
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

const URL = process.env.REACT_APP_URL;

export const getBeers = () => {
  return dispatch => {
    return fetch(`${URL}/beers`)
    .then(res => res.json())
    .then(beers => {
      dispatch(setBeers(beers))
    })
    .catch(error => console.log(error));
  }
}
