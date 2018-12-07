import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Label, Button } from 'semantic-ui-react';

class Navbar extends Component {
    state = {  }

    render() { 
        return (
            <Menu>
                <Menu.Item>ShoppingList <Label circular color={"grey"}>{this.props.totalCount}</Label></Menu.Item>
                <Menu.Item><NavLink to="/shoppinglist">Shopping List</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/about">About</NavLink></Menu.Item>
                <Menu.Item>
                    <Button onClick={this.props.onResetQuantity} primary>Reset</Button>
                </Menu.Item>
            </Menu>
        );
    }
}
 
export default Navbar;