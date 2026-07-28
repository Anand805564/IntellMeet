import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>IntellMeet Dashboard</h1>

      <button onClick={() => navigate("/create-meeting")}>
        Create Meeting
      </button>

      <button onClick={() => navigate("/join-meeting")}>
        Join Meeting
      </button>

      <button onClick={() => navigate("/history")}>
        Meeting History
      </button>
    </div>
  );
}

export default Dashboard;