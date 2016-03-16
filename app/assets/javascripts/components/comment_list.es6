import Comment from './comment'

class CommentList extends React.Component{

	static get contextTypes(){

		return {
			store: React.PropTypes.object.isRequired
		}
	}

	componentDidMount() {
	    this.context.store.addChangeListener(this._onChange.bind(this));  
	}

	componentWillUnmount() {
	    this.context.store.removeListener(this._onChange.bind(this));
	}


	render(){
		
		console.log('rendering');
		return (

				<div>
					{ this.context.store.comments().map((comment, i) => {
					//	return <Comment key={comment.id} rank={comment.rank} body={comment.body} author={comment.author} /> 
						return <Comment key={i} {... comment}/>
					}) }
				</div>

			);
	}

	_onChange(){
		this.forceUpdate();
	}	
}

export default CommentList;