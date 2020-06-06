import React, { Component } from 'react'
import { Menu,Icon } from 'semantic-ui-react';

class MyNav extends Component {
    constructor(){
        super()
        this.state={
            activeItem:'Validate'
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Menu stackable fixed='top' borderless color={'blue'} inverted style={{borderRadius:'0px'}}>
                <Menu.Item>
          <Icon name='coffee' size='large' circular inverted color={'olive'}/>
        </Menu.Item>
        <Menu.Item header>JSON BOSS</Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          
          name='Validate'
          active={activeItem === 'Validate'}
          onClick={this.handleItemClick}
         
        />
       
        </Menu.Menu>
      </Menu>
        )
    }
}
export default MyNav