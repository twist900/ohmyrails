import Actions from '../actions';
import CommentStore from '../stores/comment_store';
import CommentList from '../components/comment_list';
import CommentForm from '../components/comment_form';
import React from 'react';

class CommentSection extends React.Component {

	constructor(props){
		super();
		this.store = new CommentStore();
		this.actions = new Actions(1);
		this.actions.setComments(props.comments);
	}

	static get childContextTypes(){
		return {
			store: React.PropTypes.object.isRequired,
			actions: React.PropTypes.object.isRequired
		}
	}

	getChildContext(){
		return {
			store: this.store,
			actions: this.actions
		}
	}

	render(){

		return (
			<div>
				<CommentForm isReplying={true}	/>
				<CommentList parent_id={null}/>
			</div>
		);
	}

}

window.Actions = Actions;
window.CommentSection = CommentSection;
export default CommentSection;