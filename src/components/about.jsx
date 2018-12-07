import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';

class About extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <h1>What are you doing here? Go add something to the shopping list!</h1>
                <Button primary onClick={() => this.props.history.push("/shoppinglist")}>Visit Shopping List</Button>
            </Container>
        );
    }
}
 
export default About;