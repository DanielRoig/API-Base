const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcryptjs')

const fillDB = async () => {
    console.log("Filling DB...")
    //Delete all the existing DB
    User.deleteMany({}, function (err) {});
    Post.deleteMany({}, function (err) {});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("123456", salt)

    const user1 = await new User({
        email: "user1@gmail.com",
        password: hashedPassword
    }).save();

    const user2 = await new User({
        email: "usser2@gmail.com",
        password: hashedPassword
    }).save();

    const post1 = await new Post({
        message: "This is a post from user1",
    }).save();

    const post2 = await new Post({
        message: "This is a post from user2",
    }).save();

    await User.findByIdAndUpdate(
        user2._id, {
            $push: {
                posts: [post1._id]
            }
        }, {
            new: true,
            useFindAndModify: false
        }
    )

    await User.findByIdAndUpdate(
        user1._id, {
            $push: {
                posts: [post2._id]
            }
        }, {
            new: true,
            useFindAndModify: false
        }
    )
    console.log("Ready!")
}

module.exports = fillDB