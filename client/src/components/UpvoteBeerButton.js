import React from 'react';
import { Icon } from 'semantic-ui-react'

// component without state doesn't need to be a JS object of type Component
const UpvoteBeerButton = () => {
  return(
    <Icon name='thumbs up outline'/>
  )
}

export default UpvoteBeerButton;
