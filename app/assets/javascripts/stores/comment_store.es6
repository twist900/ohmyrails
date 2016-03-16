import AppDispatcher from '/app_dispatcher';
import Constants from '/constants'

class CommentStore extends EventEmitter{
	
	constructor(){
		super();
		this._comments = [];

		AppDispatcher.register((payload) => {
			console.log(payload);
			switch(payload.actionType){

				case Constants.SET_COMMENTS:
					this.setComments(payload.comments);
					this.emitChange();
					break;     
				case Constants.ADD_COMMENT:
					this.addComment(payload.comment);
					this.emitChange();
					break;
				default:
				// NO_OP

			}
		});

	} 

	addComment(comment){
		this._comments[comment.id  || this._comments.length] = comment;
		console.log(this._comments);
	}

	setComments(comments){
		comments.forEach(comment => {
			this.addComment(comment);
		});
	}

	comments(){
		return this._comments;
	}

	addChangeListener(callback){
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback){
		this.removeListener(Constants.CHANGE_EVENT, callback);
	}

	emitChange(){
		this.emit(Constants.CHANGE_EVENT);	 
	}

}

export default CommentStore;