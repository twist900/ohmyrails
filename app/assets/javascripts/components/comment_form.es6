class CommentForm extends React.Component {
	

	static get contextTypes(){
		return {
			actions: React.PropTypes.func.isRequired
		}
	}

	constructor(){
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
		console.log(this.state);
		this.context.actions.addComment(this.state);
		this.setState(this.defaultState);
	}

	render(){
		return (
			<div className="form-group">
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
						<button onClick={this.submitComment.bind(this)} type="submit" className="btn btn-default"> Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentForm;