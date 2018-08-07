import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'


export function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
        	return {...state, comments: state.comments.map(comment => {
        		if(comment.id === action.id) {
        			comment.text = action.text;
        		}
        		return comment;
        	})};
       	case THUMB_UP_COMMENT:
       		return {...state, comments: state.comments.map(comment => {
       			if(comment.id === action.id) {
        			comment.votes++;
        		}
        		return comment;
       		})};
       	case THUMB_UP_COMMENT:
       		return {...state, comments: state.comments.map(comment => {
       			if(comment.id === action.id) {
        			comment.votes--;
        		}
        		return comment;
       		})};
        default:
            return state.comments;
    }
}