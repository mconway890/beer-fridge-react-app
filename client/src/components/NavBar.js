import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' horizontal="true">
      <Menu.Item header>BeerFridge</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'>
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          as={Link} to='/beers'
          name='beer'
          active={activeItem === 'beer'}
          onClick={this.handleItemClick}
        >
          <Icon name='beer' />
          Beers
        </Menu.Item>
        <Menu.Item
          as={Link} to='/beers/new'
          name='add beer'
          active={activeItem === 'add beer'}
          onClick={this.handleItemClick}
        >
          <Icon name='plus' />
          Add Beer
        </Menu.Item>
      </Menu>
    )
  }
}
