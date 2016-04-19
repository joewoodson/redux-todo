import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions/index';

class Todo extends Component {
	render() {
		return (
			<li className={this.props.completed ? "completed todo-item" : "todo-item"} onClick={() => this.props.toggleTodo(this.props.id)}>{this.props.text}</li>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleTodo: toggleTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(Todo);