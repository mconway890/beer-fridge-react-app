function search(query) {
  return fetch(`/api/beer?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON);
}
