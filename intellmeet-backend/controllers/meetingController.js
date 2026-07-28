const Meeting = require("../models/Meeting");


// Create Meeting
const createMeeting = async (req, res) => {

    try {

        const { meetingName, meetingId } = req.body;

        const existingMeeting = await Meeting.findOne({ meetingId });

        if (existingMeeting) {
            return res.status(400).json({
                message: "Meeting ID already exists"
            });
        }

        const meeting = await Meeting.create({
            meetingName,
            meetingId
        });

        res.status(201).json({
            success: true,
            meeting
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get All Meetings
const getMeetings = async (req, res) => {

    try {

        const meetings = await Meeting.find().sort({
            createdAt: -1
        });

        res.status(200).json(meetings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Join Meeting
const joinMeeting = async (req, res) => {

    try {

        const { meetingId } = req.body;

        const meeting = await Meeting.findOne({
            meetingId
        });

        if (!meeting) {

            return res.status(404).json({
                message: "Meeting not found"
            });

        }

        res.status(200).json({
            success: true,
            meeting
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createMeeting,
    getMeetings,
    joinMeeting
};