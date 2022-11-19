const router = require('express').Router();

const PostRoutes = require('./blog-routes');
const userRoutes = require('./user-routes')

router.use('/Post', PostRoutes)
router.use('/user', userRoutes)

module.exports = router;