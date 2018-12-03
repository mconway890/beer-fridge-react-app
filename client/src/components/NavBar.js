import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' horizontal="true">
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'>
          Beer
          <br></br>
          Fridge
        </Menu.Item>

        <Menu.Item
          as={Link} to='/beers'
          name='beer'
          active={activeItem === 'beer'}
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link} to='/breweries'
          name='brewery'
          active={activeItem === 'brewery'}
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link} to='/breweries/new'
          name='add brewery'
          active={activeItem === 'add brewery'}
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link} to='/contact'
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link} to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        ></Menu.Item>
      </Menu>
    )
  }
}
