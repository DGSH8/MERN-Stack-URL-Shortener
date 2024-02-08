import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";
import Toggle from "./components/Toggle";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/:urlCode" element={<ShortUrlRedirect />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <div>{/* <Toggle /> */}</div>
    </div>
  );
}

export default App;
