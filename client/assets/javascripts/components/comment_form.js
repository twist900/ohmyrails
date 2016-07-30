import React from 'react';
import _ from 'lodash';
class CommentForm extends React.Component {


	static get contextTypes(){
		return {
			actions: React.PropTypes.object.isRequired
		}
	}

	static get PropTypes(){

		return {
			isReplying: React.PropTypes.bool,
			onCommentSubmitted: React.PropTypes.func,
			parent_id: React.PropTypes.number

		}
	}

	constructor(props){
		super();
		this.defaultState = { author: '', body: ''};
		this.state = this.defaultState;
	}

	onFieldChange(event){
		let prop = {};
		prop[event.target.name] = event.target.value;
		this.setState(prop);

	}

	submitComment(event){
		event.preventDefault();
		console.log(this.props);
		this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }));
		this.setState(this.defaultState);
		if(this.props.onCommentSubmitted){
			this.props.onCommentSubmitted();
		}
	}

	render(){
		return (
			<div className={ "form-group" + `${this.props.isReplying ? "" : " hide"}`}>
				<form className="input-form">
					<div className="form-group">
						<label>Author</label>
						<input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} className="form-control" />
					</div>
					<div className="form-group">
						<label>Body</label>
						<textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)} className="form-control"  />
					</div>

					<div className="form-group">
						<button onClick={this.submitComment.bind(this)} type="submit" className="btn btn-primary"> Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentForm;