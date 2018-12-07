import React, { Component } from 'react';
import { Container, Grid, Message } from 'semantic-ui-react';
import ListItem from './listItem';
import ListInput from './listInput';

class List extends Component {
    render() { 
        const { lists, onIncrement, onDecrement, onDelete, onHandleInput, onAddListItem, onHandleLike } = this.props;
        console.log(this.props)
        return (
            <Container>  
                {this.props.errors.input && <Message color="red">{this.props.errors.input}</Message> }
                <ListInput onHandleInput={onHandleInput} onAddListItem={onAddListItem} input={this.props.input} />
                {this.props.lists.length === 0 && <Grid container textAlign='center'><h4>Add a item to your shopping card</h4></Grid>}
                {lists.map((list, index) => (  
                    <ListItem key={index} list={list} index={index} onHandleLike={onHandleLike} onDelete={onDelete} onDecrement={onDecrement} onIncrement={onIncrement} />
                ))}
            </Container>
        );
    }
}
 
export default List;