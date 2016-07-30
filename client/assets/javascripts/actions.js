import AppDispatcher from './app_dispatcher';
import Constants from './constants';
import Api from './api';

class Actions {

	constructor(restaurantId){
		console.log('actions created')
		this.restaurantId = restaurantId
		this.watchInterval = setInterval(this.watch.bind(this), 1000)
	}

	addComment(params){
		Api.post('/restaurants/1/comments', {
			comment: params
		}).then(response => {
			return response.json();
		}).then( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.ADD_COMMENT,
				comment: comment
			})
		})

	}

	upvoteComment(comment){
		Api.put(`/restaurants/1/comments/${comment.id}/upvote`).then(response => {
			return response.json();
		}).then( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.UPVOTE_COMMENT,
				comment: comment
			})
		})
	}

	setComments(params){

		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENTS,
			comments: params
		})
	}

	watch() {
		console.log('yo')
		Api.get(`/restaurants/${this.restaurantId}/comments`).then( comments => {

			this.setComments(comments)
		})
	}
}

export default Actions;

