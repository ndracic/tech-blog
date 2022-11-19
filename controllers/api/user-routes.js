const router = require('express').Router();
const { User } = require('../../models');

//Look for all Users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['[password]'] }
  })
  .then(userDB => res.json(userDB))
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
});

//Look for existing User
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['[password]'] },
    where: {
      id: req.params.id
    },
    include: [{
      model: BlogPost,
      attributes: [
        'id',
        'title',
        'description',
        'date_created'
      ]
    }]
  })
  .then(userDB => {
    if(!userDB) {
      res.status(404).json({ message: 'No user found with this id'});
      return;
    }
    res.json(userDB)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error);
  });
});

//Create New User
router.post('/', async (req, res) => {
  try {
    const userDB = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userDB.id;
      req.session.logged_in = true;

      res.status(200).json(userDB);
    });
    console.log('USER DATA', userDB)
    // res.status(200).json(userDB);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const userDB = await User.findOne({
      where : {
        email: req.body.email
      },
    });

    if (!userDB) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!'});
      return;
    }

    const validPassword = await userDB.checkPassword(req.body.password);
    
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!'});
      return;
    };

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json({ user: userDB, message: 'You are now logged in!'})
    });
  } catch (error) {
    res.status(500).json(error)
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;