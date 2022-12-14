const router = require('express').Router();
const {User, Post} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const PostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const Posts = PostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      Posts,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/post', (req, res) => {
  if (req.session.logged_in) {
    res.render('post')
    return
  }

});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/')
    return
  }

  res.render('login')
})

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/')
    return
  }

  res.render('signup')
})

module.exports = router;