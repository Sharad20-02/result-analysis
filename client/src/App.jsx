import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  // const [token, setToken] = useState(null);
  // useEffect(() => {
  const token = localStorage.getItem("token");
  // console.log("getToken", storedToken);
  // setToken(storedToken);
  // }, []);

  return (
    <div style={{ backgroundColor: "#1d1c1c", height: "100vh" }}>
      <Router>
        <Routes>
          {token && <Route path="/" element={<Home />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
