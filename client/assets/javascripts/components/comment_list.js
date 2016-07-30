import Comment from './comment'
import React from 'react';

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


		return (

				<ul>
					{ this.context.store.comments(this.props.parent_id).map((comment, i) => {
					//	return <Comment key={comment.id} rank={comment.rank} body={comment.body} author={comment.author} />
						return <Comment key={i} {... comment}/>
					}) }
				</ul>

			);
	}

	_onChange(){
		this.forceUpdate();
	}
}

export default CommentList;