const router = require("express").Router(); 

const bookRoutes = require("./book");
const path = require("path")

router.use("/books", bookRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;