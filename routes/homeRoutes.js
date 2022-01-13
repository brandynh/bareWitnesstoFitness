const router = require('express').Router();
const path = require('path');

// Route for navigating to excercise page
router.get("/excercise", (req, res) => {

    res.sendFile(path.join(__dirname, '../public/exercise.html'));

});

// Route for navigating to stats page
router.get("/stats", (req, res) => {

    res.sendFile(path.join(__dirname, '../public/stats.html'));

});

// Home route for any route that is not the ones above.
router.get("/*", (req, res) => {

    res.sendFile(path.join(__dirname, '..public/index.html'));

});

module.exports = router;