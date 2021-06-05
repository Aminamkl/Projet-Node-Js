var Comment = require('../repositories/comments')

module.exports = function(router){
	router.route('/comments')
		.get(async function(req, res){
			comment = await Comment.getAllComments();
			res.send(comment)
		})
		.post(async function(req, res){
			console.log(req.body);
			// verification de data
			var createdComment = await Comment.addComment(req.body);

			res.send('Comment added');
		})
}