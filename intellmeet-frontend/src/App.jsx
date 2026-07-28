import { Routes, Route } from "react-router-dom";

import Login from "./pages/Logic";
import Dashboard from "./pages/Dashboard";
import CreateMeeting from "./pages/CreateMeeting";
import JoinMeeting from "./pages/JoinMeeting";
import MeetingHistory from "./pages/MeetingHistory";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Create Meeting */}
      <Route path="/create-meeting" element={<CreateMeeting />} />

      {/* Join Meeting */}
      <Route path="/join-meeting" element={<JoinMeeting />} />

      {/* Meeting History */}
      <Route path="/history" element={<MeetingHistory />} />
    </Routes>
  );
}

export default App;