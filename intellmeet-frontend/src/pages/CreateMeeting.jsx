import { useState } from "react";
import "../App.css";

function CreateMeeting() {
  const [meetingName, setMeetingName] = useState("");
  const [meetingId, setMeetingId] = useState("");

  const createMeeting = () => {
    if (meetingName.trim() === "") {
      alert("Please enter a meeting name");
      return;
    }

    // Generate random meeting ID
    const id = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    // Create meeting object
    const meeting = {
      id: id,
      name: meetingName,
    };

    // Get old meetings from localStorage
    const oldMeetings =
      JSON.parse(localStorage.getItem("meetings")) || [];

    // Add new meeting
    oldMeetings.push(meeting);

    // Save updated list
    localStorage.setItem(
      "meetings",
      JSON.stringify(oldMeetings)
    );

    // Display generated ID
    setMeetingId(id);

    // Clear input
    setMeetingName("");
  };

  return (
    <div className="dashboard">
      <h1>Create Meeting</h1>

      <input
        type="text"
        placeholder="Enter Meeting Name"
        value={meetingName}
        onChange={(e) => setMeetingName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={createMeeting}>
        Create Meeting
      </button>

      {meetingId && (
        <div style={{ marginTop: "20px" }}>
          <h2>Meeting Created!</h2>
          <p>
            <strong>Meeting ID:</strong> {meetingId}
          </p>
        </div>
      )}
    </div>
  );
}

export default CreateMeeting;