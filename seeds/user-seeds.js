const { User } = require('../models');

const userDb = [{
        name: 'Nermin',
        password: 'test',
    },
    {
        name: 'dracic',
        password: 'test2'
    },
];

const seedUsers = () => User.bulkCreate(userDb);

module.exports = seedUsers;