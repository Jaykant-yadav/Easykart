// Set a variable accessible to all views
module.exports = ((req, res, next) => {
    res.locals.currentURL = req.originalUrl; // like '/' or '/products'
    next();
});