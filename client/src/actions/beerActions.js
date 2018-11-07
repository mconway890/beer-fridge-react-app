const URL = process.env.REACT_APP_URL;

export const addBeer = beer => {
  return {
    type: 'ADD_BEER',
    beer: Object.assign({}, beer, { votes: 0 })
  };
};

export const setBeers = beers => {
  return {
    type: 'GET_BEERS',
    beers
  }
}

export const removeBeer = beerId => {
  return {
    type: 'REMOVE_BEER',
    beerId
  };
};

export const upvoteBeer = beerId => {
  return {
    type: 'UPVOTE_BEER',
    beerId
  }
}

export const downvoteBeer = beerId => {
  return {
    type: 'DOWNVOTE_BEER',
    beerId
  }
}

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

export const fetchBeer = (beerId) => {
  return dispatch => {
    return fetch(`${URL}/beers/${beerId}`)
    .then(resp => resp.json())
    .then(beer => {
      dispatch(setBeers([beer]));
    })
  }
}

export const createBeer = (recipe) => {
  return dispatch => {
    return fetch(`${URL}/beers`, {
      method: 'POST'
    })
    .then(beer => {
      dispatch(addBeer(beer))
    })
  }
}
