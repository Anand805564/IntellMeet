const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({

    meetingName: {
        type: String,
        required: true
    },

    meetingId: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Meeting", meetingSchema);