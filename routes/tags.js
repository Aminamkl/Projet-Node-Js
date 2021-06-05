var Tag = require('../repositories/tags')

module.exports = function(router){
	router.route('/tags')
		.get(async function(req, res){
			tag = await Tag.getAllTags(); 
			res.send(tag)
		})
		.post(async function(req, res){
			console.log(req.body);
			// verification de data
			var createdTag = await Tag.addTag(req.body);

			res.send('Tag added');
		})
}