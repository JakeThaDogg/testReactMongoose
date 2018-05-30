var mongoose = require('mongoose')

var CategoriesSchema = new mongoose.Schema({
  title: {
    type: String
  },
  image: {
    data: Buffer, contentType: String
  },
  parent: {
    type: String
  }
})

var Categories = mongoose.model('Content', CategoriesSchema)
module.exports = Categories
