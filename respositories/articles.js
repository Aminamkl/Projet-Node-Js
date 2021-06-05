const { Article } = require('../models')

module.exports = {
	getAllArticles: function(){
		return Article.findAll();
	},
	getArticles: function(offset=0, limit=10){
		return Article.findAll({offset: offset, limit: limit});
	},
	getArticleByPublished: function(published){
		return Article.findAll({
			where: {
				published: published
			}
		});
	},
	getArticle: function(id){
		return Article.findOne({
			where: {
				id: id
			}
		})
	},
	getArticleByTitle: function(title){
		return Article.findOne({
			where: {
				title: title
			}
		});
	},
	addArticle: async function(articleData){
		var article = await Article.create(articleData)
		return article
	},
	updateArticle: async function(id, articleData){
		return await Article.update(articleData, {
			where: {
				id: id
			}
		})
	},
	deleteArticle: async function(id){
		return await Article.destroy({
			where: {
				id: id
			}
		})
	},

}