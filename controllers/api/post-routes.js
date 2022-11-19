const router = require('express').Router();
const { Post } = require('../../models');

// router.get('/', async (req, res) => {
  
// });

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router;