const { Comment } = require('../models')

module.exports = {
	getAllComments: function(){
		return Comment.findAll();
	},
	getComments: function(offset=0, limit=10){
		return Comment.findAll({offset: offset, limit: limit});
	},
	getCommentByContent: function(content){
		return Comment.findAll({
			where: {
				content: content
			}
		});
	},
	getComment: function(id){
		return Comment.findOne({
			where: {
				id: id
			}
		})
	},
	addComment: async function(commentData){
		var comment = await Comment.create(commentData)
		return comment
	},
	updateComment: async function(id, commentData){
		return await Comment.update(commentData, {
			where: {
				id: id
			}
		})
	},
	deleteComment: async function(id){
		return await Comment.destroy({
			where: {
				id: id
			}
		})
	},

}