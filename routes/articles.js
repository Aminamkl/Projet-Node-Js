var Article = require('../repositories/articles')

module.exports = function(router){
	router.route('/articles')
		.get(async function(req, res){
			article = await Article.getAllArticles();
			res.send(article)
		})
		.post(async function(req, res){
			console.log(req.body);
			// verification de data
			var createdArticle = await Article.addArticle(req.body);

			res.send('Article added');
		})
}