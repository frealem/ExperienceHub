const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    commeterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, "The commeter id is required!"],
    },
    content: {
        type: String,
        required: [true, "please enter text to comment!"],
    },
    // this is used if the comment is a reply for another comment
    replyTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    
},{
    timestamps: true,
});

module.exports = mongoose.model('Comment', CommentSchema);