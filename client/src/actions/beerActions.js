import {resetBeerForm} from './beerInput';

export const setBeers = beers => {
  return {
    type: 'GET_BEERS',
    beers
  }
}

export const addBeer = beer => {
  return {
    type: 'ADD_BEER',
    beer: Object.assign({}, beer, { votes: 0 })
  };
};

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
    return fetch('http://localhost:3001/api/v1/beers')
    .then(response => response.json())
    .then(beers => {
      // dispatch passed hash object with type and payload
      dispatch(setBeers(beers))
    })
    .catch(error => console.log(error));
  }
}

export const fetchBeer = (beerId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers/${beerId}`)
    .then(response => response.json())
    .then(beer => {
      dispatch(setBeers([beer]));
    })
    .catch(error => console.log(error))
  }
}

export const createBeer = (beer) => {
  // after e.preventDefault => createBeer action
  //console.log('C');
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/beers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({beer: beer})
    })
    .then(response => response.json())
    .then(beer => {
      // after fetch finished loading
      //console.log('D');
      dispatch(addBeer(beer))
      alert('Beer added successfully!')
      dispatch(resetBeerForm())
    })
    .catch(error => console.log(error))
  }
  // unreachable code
  //console.log('E');
}

export const deleteBeer = (beerId) => {
  //console.log('C');
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers/${beerId}`, {
      method: "DELETE"
    })
    .then(response => {
      //console.log('D');
      dispatch(removeBeer(beerId))
    })
    .catch(error => console.log(error))
  }
}

export const likeBeer = (beerId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers/${beerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(beerId)
    })
    .then(response => response.json())
    .then(beer => {
      dispatch(upvoteBeer(beerId))
    })
    .catch(error => console.log(error))
  }
}

export const dislikeBeer = (beerId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/beers/${beerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(beerId)
    })
    .then(response => response.json())
    .then(beer => {
      dispatch(downvoteBeer(beerId))
    })
    .catch(error => console.log(error))
  }
}
