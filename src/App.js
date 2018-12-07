import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import List from './components/list';
import NotFound from './components/notFound';
import About from './components/about';
import { Storage } from './helper/LocalStorage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResetQuantity = this.handleResetQuantity.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.handleLike = this.handleLike.bind(this);
    
    this.state = {
      input: '',
      lists: [
        {value: 0, text: "banana", done: false}
      ],
      errors: {}
    }
  }

  componentDidMount() {
     let lists = Storage.get('lists');
     if(!lists) lists = [];
     this.setState({ lists })
  }

  handleDelete(index) {
    console.log(index);
      const lists = [...this.state.lists];
      lists.splice(index, 1);
      this.setState({ lists });
  }

  handleIncrement(list) {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    lists[index] = {...list};
    lists[index].value++;
    this.setState({ lists })
  }

  handleDecrement(list) {
    const lists = [...this.state.lists];
    const index = lists.indexOf(list);
    lists[index] = {...list};
    lists[index].value--;
    this.setState({lists});
  }

  handleResetQuantity() {
    const lists = [...this.state.lists];
    lists.map(list => list.value = 0);
    this.setState({lists});
  }

  handleInput(e) {
    this.setState({input: e.target.value})
  }

  validate = () => {
    const errors = {};

    if(this.state.input.trim() === "") {
      errors.input = "Form must be filled out";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }


  addListItem(e) {
    e.preventDefault();

    const errors = this.validate();
    this.setState({errors: errors || {}})
    if(errors) return;


    let lists = Storage.get('lists');
    if(!lists) lists = [];

    lists.push({value: 0, text: this.state.input, done: false})
    Storage.set('lists', lists)
    this.setState({lists, input: ''});
  }

  handleLike(index) {
    const lists = [...this.state.lists];
    lists[index].done = !lists[index].done;
    this.setState({ lists })
  }

  render() {
    return (
      <div>
        <Navbar onResetQuantity={this.handleResetQuantity} totalCount={this.state.lists.filter(list => list.value > 0).length} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shoppinglist" render={(props) => <List onHandleLike={this.handleLike} onHandleInput={this.handleInput} onAddListItem={this.addListItem} errors={this.state.errors} input={this.state.input} lists={this.state.lists} onDelete={this.handleDelete} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} {...props} />} />
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={About} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
