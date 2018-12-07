import React, { Component } from 'react';
import { Grid, Input, Form } from 'semantic-ui-react';

class ListInput extends Component {
    state = {  }
    render() { 
        return (
            <Grid container verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={16} >
                        <Form onSubmit={this.props.onAddListItem}>
                            <Input onChange={this.props.onHandleInput} value={this.props.input} fluid placeholder='Search...' />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
 
export default ListInput;