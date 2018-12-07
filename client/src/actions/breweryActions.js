import {resetBreweryForm} from './breweryInput';

export const setBreweries = breweries => {
  return {
    type: 'GET_BREWERIES',
    breweries
  }
}

export const addBrewery = brewery => {
  return {
    type: 'ADD_BREWERY',
    brewery: Object.assign({}, brewery, { votes: 0 })
  };
};

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
    return fetch('http://localhost:3001/api/v1/breweries')
    .then(response => response.json())
    .then(breweries => {
      // dispatch passed hash object with type and payload
      dispatch(setBreweries(breweries))
    })
    .catch(error => console.log(error));
  }
}

export const fetchBrewery = (breweryId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/breweries/${breweryId}`)
    .then(response => response.json())
    .then(brewery => {
      dispatch(setBreweries([brewery]));
    })
    .catch(error => console.log(error))
  }
}

export const createBrewery = (brewery) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/breweries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // JSON.stringify converts JS value to JSON string
      body: JSON.stringify({brewery: brewery})
    })
    // Load it as json
    .then(response => response.json())
    .then(brewery=> {
      dispatch(addBrewery(brewery))
      alert('Brewery added successfully!')
      dispatch(resetBreweryForm())
    })
    .catch(error => console.log(error))
  }
}

export const deleteBrewery= (breweryId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/breweries/${breweryId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeBrewery(breweryId))
    })
    .catch(error => console.log(error))
  }
}

export const likeBrewery = (breweryId) => {
  return dispatch => {
    // fetch requests url route to increase method in breweries controller
    return fetch(`http://localhost:3001/api/v1/breweries/${breweryId}/increase`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(breweryId)
    })
    .then(response => response.json())
    .then(brewery=> {
      dispatch(upvoteBrewery(breweryId))
    })
    .catch(error => console.log(error))
  }
}

export const dislikeBrewery = (breweryId) => {
  return dispatch => {
    // fetch requests url route to decrease method in breweries controller
    return fetch(`http://localhost:3001/api/v1/breweries/${breweryId}/decrease`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(breweryId)
    })
    .then(response => response.json())
    .then(brewery => {
      dispatch(downvoteBrewery(breweryId))
    })
    .catch(error => console.log(error))
  }
}
