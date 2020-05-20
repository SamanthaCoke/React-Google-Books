const router = require("express").Router(); 

const BookController = require("../../controllers/BookController");

router.route("/")
.get(BookController.findAll)
.post(BookController.create);

router.route("/:id")
.delete(BookController.delete);


module.exports =router; 