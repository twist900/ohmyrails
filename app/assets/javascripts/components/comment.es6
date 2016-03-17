import CommentForm from './comment_form';
import CommentList from './comment_list'

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

	onToggleReply(){
		this.setState({ isReplying: !this.state.isReplying})
	}

	render(){
		
		const replyText = this.state.isReplying ? "Hide" : "Reply";
		return (
				
				<li>
					<blockquote>
						<p>{ this.props.body } </p>
						<cite>
							<p className="pull-right"> by: { this.props.author }</p>
						</cite>
					</blockquote>
					<button className="btn btn-default" onClick={this.onToggleReply.bind(this)}>{replyText}</button>
					<CommentForm parent_id={this.props.id} isReplying={this.state.isReplying}/>
					<CommentList parent_id={this.props.id}/>
				</li>

			);
	}

}

export default Comment;