import _ from 'lodash';
import { ADD_TODO } from '../actions/index';
import { TOGGLE_TODO } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return state.concat({
				text: action.payload,
				completed: false,
				id: action.id
			})
		case TOGGLE_TODO:
   			// const clicked = _.find(state, 'id', action.id);

   			return state.map((todo, id) => {
		        if (todo.id == action.id) {
		        	return Object.assign({}, todo, {
		            completed: !todo.completed
		          })
		        }
		        return todo
      		})

		default:
			return state
	}

}