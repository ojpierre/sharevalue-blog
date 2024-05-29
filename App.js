import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Homepage from "../src/Pages/Homepage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Write from "./Pages/Write";
import Settings from "./Pages/Settings";
import Single from "./Pages/Single";
import { Context } from "./context/Context";
import { useContext } from "react";


function App() {
  const {user} = useContext(Context)

  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/register"
            element={user ? <Homepage /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Login /> : <Register />}
          />
          <Route
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route
            path="/post/:postId"
            element={user ? <Single /> : <Register />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
