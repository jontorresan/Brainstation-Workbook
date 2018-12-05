const bookshelf = require('./bookshelf')

const Student = bookshelf.Model.extend({
  tableName: 'students'
})

module.exports = Student