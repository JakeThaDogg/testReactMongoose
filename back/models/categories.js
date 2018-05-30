var mongoose = require('mongoose')

var CategoriesSchema = new mongoose.Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  parent: {
    type: String
  }
})

var Categories = mongoose.model('Content', CategoriesSchema)
module.exports = Categories
