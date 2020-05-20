const Book = require('../models/Book');


module.exports = {
    create: function(req, res) {
        Book.create(req.body)
        .then(book => {
            return res.json(book)
        })
        .catch(err => {
            return res.status(404).json(err);
        })
    }, 

    findAll: function(req, res) {
        Book.find({})
        .then(books => {
            return res.json(books)
        })
        .catch(err => {
            return res.status(404).json(err);
        })
    },

    delete: function(req, res) {
        Book.findOneAndDelete({_id: req.params.id})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(404).json(err);
        })
    }
}