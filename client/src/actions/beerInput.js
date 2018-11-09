export const updateBeerFormData = beerFormData => {
  return {
    type: "UPDATE_BEER",
    beerFormData
  }
}

export const resetBeerForm = () => {
  return {
    type: "RESET_FORM"
  }
}
