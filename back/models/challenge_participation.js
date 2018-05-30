var mongoose = require('mongoose')

var ChallengeSchema = new mongoose.Schema({
  user_id: {
    type: String
  },
  user_email: {
    type: String
  },
  content_id: {
    type: String
  },
  participation: {
    type: String
  },
  subscribed: {
    type: Boolean
  },
  created_date: {
    type: Date
  }
})

var Challenge = mongoose.model('Content', ChallengeSchema)
module.exports = Challenge
