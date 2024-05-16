const router = require('express').Router();
const aboutUsRoute = require('./aboutus');
const contactUs = require('./contactus');
const topGames = require('./topGames');

router.use('/about', aboutUsRoute);
router.use('/contact', contactUs);
router.use('Top-games', topGames);

module.exports = router;