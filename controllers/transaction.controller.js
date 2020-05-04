const shortId = require('shortid');

const db = require('../db.js');

module.exports.index = (request, response) => {
  response.render('./transactions/transactions.pug', {
    transactions: db.get('transactions').value()
  })
};

module.exports.create = (request, response) => {
  response.render('./transactions/create.transactions.pug', {
    users: db.get('users').value(),
    books: db.get('books').value()
  })
};

module.exports.postCreate = (request, response) => {
  var transactionsId = shortId.generate();
  var userName = request.body.userName;
  var bookName = request.body.bookName;
  var userId = db.get('users').value().find(user => {
    if(user.userName === userName) {
      return user.id;
    }
  });

  var bookId = db.get('books').value().find(book => {
    if(book.title === bookName) {
      return book.id;
    }
  });
  
  db.get('transactions')
    .push({id: transactionsId, userId: userId.id, bookId: bookId.id})
    .write();
  response.redirect('/transactions');
}