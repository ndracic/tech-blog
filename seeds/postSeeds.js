const { Post } = require('../models');

const postDb = [{
        title: "test",
        content: "testtcont",
        user_id: 1

    },

];

const seedPosts = () => Post.bulkCreate(postDb);

module.exports = seedPosts()