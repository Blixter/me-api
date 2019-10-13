const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    username: String,
    time: String,
    message: String
});

module.exports = mongoose.model('Chats', ChatSchema);
