const express = require("express");
const router = express.Router();

// router.get('/auth', authentication);
router.get("/auth", (req, res) => {
    res.render('./auth/auth.ejs');
})

module.exports = router;