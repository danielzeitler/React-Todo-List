import React, { Component } from 'react';
import { Button, Grid, Label, Header } from 'semantic-ui-react';
import Like from './like';

class ListItem extends Component {

    render() { 
        const checkIfZero = this.props.list.value === 0 ? 'zero' : this.props.list.value;
        const badgeClasses = (this.props.list.value === 0) ? 'yellow' : 'green';
        const checkIfLiked = (this.props.list.done) ? 'grey' : 'black';

        return (
            <div>
            <Grid container columns={6} verticalAlign='middle' >
                <Grid.Row>
                    <Grid.Column  mobile={16} tablet={3} computer={1}>
                        <Label circular color={badgeClasses}>{checkIfZero}</Label>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={3} computer={1}>
                        <Button onClick={() => this.props.onIncrement(this.props.list)} color='black'>+</Button>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={3} computer={2}>
                        <Button disabled={(this.props.list.value === 0) ? true : false} onClick={() => this.props.onDecrement(this.props.list)} color='black'>-</Button>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={3} computer={8}>
                        <Header as="h4" color={checkIfLiked}>{this.props.list.text}</Header>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={3} computer={2}>
                        <Like list={this.props.list} onHandleLike={() => this.props.onHandleLike(this.props.index) }/>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={3} computer={2} >
                        <Button onClick={() => this.props.onDelete(this.props.index)} color='red'>Delete</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
}
 
export default ListItem;