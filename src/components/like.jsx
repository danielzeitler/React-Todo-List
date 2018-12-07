import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 
        let classes = "fa fa-check-square";
        classes += (this.props.list.done) ? '' : '-o';
        return (
            <i onClick={this.props.onHandleLike} className={classes}></i>
        );
    }
}
 
export default Like;