import { useEffect, useState } from "react";
import "../App.css";

function MeetingHistory() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const savedMeetings =
      JSON.parse(localStorage.getItem("meetings")) || [];

    setMeetings(savedMeetings);
  }, []);

  return (
    <div className="dashboard">
      <h1>Meeting History</h1>

      {meetings.length === 0 ? (
        <p>No Meetings Found</p>
      ) : (
        meetings.map((meeting, index) => (
          <div key={index}>
            <h2>{meeting.name}</h2>
            <p>Meeting ID: {meeting.id}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default MeetingHistory;