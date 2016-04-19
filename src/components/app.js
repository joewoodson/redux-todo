import React from 'react';
import { Component } from 'react';
import List from '../containers/list';
import AddTodo from '../containers/add_todo';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<AddTodo />
    		<List />
    	</div>
    );
  }
}
