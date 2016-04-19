import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniqueId } from 'lodash';
import Todo from '../containers/todo';

class List extends Component {
	renderList() {
		return this.props.todos.map((todo) => {
			return (
				<Todo 
					key={todo.id} 
					text={todo.text} 
					completed={todo.completed} 
					id={todo.id}
				/>
			);
		});
	}
	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps({ todos }) {
	return { todos };
}

export default connect(mapStateToProps)(List);