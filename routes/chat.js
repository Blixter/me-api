const express = require('express');
const router = express.Router();

const Chats = require("../models/Chats.js");

// Get all chat-messages
router.get("/",
    async (req, res) => {
        try {
            const chats = await Chats.find();

            res.status(200).json(chats);
        } catch (err) {
            res.status(400).json({message: err});
        }
    });

// Post a new chat-message
router.post("/",
    async (req, res) => {
        const chat = new Chats({
            username: req.body.username,
            time: req.body.time,
            message: req.body.message
        });

        try {
            const savedChat = await chat.save();

            res.status(201).json(savedChat);
        } catch (err) {
            res.status(400).json({message: err});
        }
    });

module.exports = router;
