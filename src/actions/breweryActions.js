const URL = process.env.REACT_APP_URL;

export const addBrewery = brewery => {
  return {
    type: 'ADD_BREWERY',
    brewery: Object.assign({}, brewery, { votes: 0 })
  };
};

export const setBreweries = breweries => {
  return {
    type: 'GET_BREWERIES',
    breweries
  }
}

export const removeBrewery = breweryId => {
  return {
    type: 'REMOVE_BREWERY',
    breweryId
  };
};

export const upvoteBrewery = breweryId => {
  return {
    type: 'UPVOTE_BREWERY',
    breweryId
  }
}

export const downvoteBrewery = breweryId => {
  return {
    type: 'DOWNVOTE_BREWERY',
    breweryId
  }
}

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
