import { useState } from "react";
import "../App.css";

function JoinMeeting() {
  const [meetingId, setMeetingId] = useState("");
  const [message, setMessage] = useState("");

  const joinMeeting = () => {
    const meetings =
      JSON.parse(localStorage.getItem("meetings")) || [];

    const meeting = meetings.find(
      (m) => m.id === meetingId.toUpperCase()
    );

    if (meeting) {
      setMessage(`Successfully joined "${meeting.name}"`);
    } else {
      setMessage("Meeting not found");
    }
  };

  return (
    <div className="dashboard">
      <h1>Join Meeting</h1>

      <input
        type="text"
        placeholder="Enter Meeting ID"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
      />

      <br /><br />

      <button onClick={joinMeeting}>
        Join Meeting
      </button>

      <h3>{message}</h3>
    </div>
  );
}

export default JoinMeeting;