const { Comment } = require('../models');

const commentDb = [{
        content: "JavaScript is no fun, it hurts my head",
        user_id: 1,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentDb);

module.exports = seedComments;