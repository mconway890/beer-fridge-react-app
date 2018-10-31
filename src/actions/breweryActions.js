export const addBrewery = brewery => {
  return {
    type: 'ADD_BREWERY',
    brewery
  };
};

export const setBreweries = breweries => {
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

const URL = process.env.REACT_APP_URL;

export const getBreweries = () => {
  return dispatch => {
    return fetch(`${URL}/breweries`)
    .then(res => res.json())
    .then(breweries => {
      dispatch(setBreweries(breweries))
    })
    .catch(error => console.log(error));
  }
}
