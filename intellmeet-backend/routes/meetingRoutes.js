const express = require("express");

const router = express.Router();

const {
    createMeeting,
    getMeetings,
    joinMeeting
} = require("../controllers/meetingController");


router.post("/create", createMeeting);

router.get("/", getMeetings);

router.post("/join", joinMeeting);


module.exports = router;