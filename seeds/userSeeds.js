const { User } = require('../models');

const userDb = [{
        username: 'Nermin',
        password: 'test',
    },
    {
        username: 'dracic',
        password: 'test2'
    },
];

const seedUsers = () => User.bulkCreate(userDb);

module.exports = seedUsers;