const User = require('../models/user');
const Post = require('../models/post');

const postCtrl = {};

postCtrl.getPosts = async (req, res, next) => {

    const inbox = req.body.inbox

    const posts = await User.findById(req.user._id).populate('posts')
    console.log(posts)
    return res.status(200).send(posts)
};


postCtrl.createPost = async (req, res, next) => {

    const receiver = await User.findOne({
        email: req.body.receiver
    });

    if (!receiver) {
        return res.status(400).send("Reciver does not exist")
    }

    const post = new Post({
        message: req.body.message,
    })

    try {
        const post_saved = await post.save()
        const inbox = await User.findByIdAndUpdate(
            receiver._id, {
    
                $push: {
                    posts: post_saved._id
                }
            }, {
                new: true,
                useFindAndModify: false
            },
        );
        
        return res.status(200).send("Post send")
    } catch (error) {
        return res.status(400).send(error)
    }  
};

module.exports = postCtrl;