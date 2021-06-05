const { Tag } = require('../models')

module.exports = {
	getAllTags: function(){
		return Tag.findAll();
	},
	getTags: function(offset=0, limit=10){
		return Tag.findAll({offset: offset, limit: limit});
	},
	getTagByName: function(name){
		return Tag.findAll({
			where: {
				name: name
			}
		});
	},
	getTag: function(id){
		return Tag.findOne({
			where: {
				id: id
			}
		})
	},
	addTag: async function(tagData){
		var tag = await Tag.create(tagData)
		return tag
	},
	updateTag: async function(id, tagData){
		return await Tag.update(tagData, {
			where: {
				id: id
			}
		})
	},
	deleteTag: async function(id){
		return await Tag.destroy({
			where: {
				id: id
			}
		})
	},

}