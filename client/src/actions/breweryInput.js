export const updateBreweryFormData = breweryFormData => {
  return {
    type: "UPDATE_BREWERY",
    breweryFormData
  }
}

export const resetBreweryForm = () => {
  return {
    type: "RESET_FORM"
  }
}
