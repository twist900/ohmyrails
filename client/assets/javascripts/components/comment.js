import CommentForm from './comment_form';
import CommentList from './comment_list';
import React from 'react';

class Comment extends React.Component{


	constructor(){
		super();
		this.state = { isReplying: false}
	}

	static get propTypes() {
		return {
				 id: React.PropTypes.number,
				 author: React.PropTypes.string,
				 body: React.PropTypes.string,
			     rank: React.PropTypes.number
			 	}
	}

	static get contextTypes(){
		return {
			actions: React.PropTypes.object.isRequired
		}
	}

	onToggleReply(){
		this.setState({ isReplying: !this.state.isReplying})
	}

	onUpvote(){
		this.context.actions.upvoteComment(this.props);
	}

	onCommentSubmitted(event){
		this.setState({ isReplying: false});
	}

	render(){

		const replyText = this.state.isReplying ? "Hide" : "Reply";
		return (

				<li className="comment">
					<blockquote>
						<p>{ this.props.body } </p>
						<footer>
							<cite>
								by: { this.props.author }
								<p className="label label-default pull-right">{this.props.rank}</p>
							</cite>
						</footer>
					</blockquote>
					<button className="btn btn-default" onClick={this.onToggleReply.bind(this)}>{replyText}</button>
					<button className="btn btn-default" onClick={this.onUpvote.bind(this)}>+1</button>
					<CommentForm
						parent_id={this.props.id}
						isReplying={this.state.isReplying}
						onCommentSubmitted={this.onCommentSubmitted.bind(this)}
					/>
					<CommentList parent_id={this.props.id}/>
				</li>

			);
	}

}

export default Comment;