const router = require('express').Router();
const {User, BlogPost} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogPosts = blogPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/blog-post', (req, res) => {
  if (req.session.logged_in) {
    res.render('blog-post')
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