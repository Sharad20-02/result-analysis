import React, { useState, useNa } from "react";
import Sliding from "../components/Sliding";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const user = { email: email, password: password };

    console.log(user);
    await axios
      .post("http://localhost:3000/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="p-6"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <img src="https://www.kletech.ac.in/images/logo.png" />
        <img src={logo2} alt="" style={{ height: "100px", width: "120px" }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1.3rem",
          marginTop: "7rem",
        }}
      >
        <Sliding />
        <div
          style={{
            position: "absolute",
            color: "#F71907",
            fontSize: 40,
            fontWeight: "600",
            left: "10%",
          }}
        >
          K L E TECHNOLOGICAL UNIVERSITY <br />
          <h1 style={{ textAlign: "center" }}>HUBLI</h1>
        </div>
        <div
          style={{
            border: "2px solid #83DDD7",
            backgroundColor: "#0a64bedda", // Set the background color to white
            display: "flex",
            flexDirection: "column",
            width: "500px",
            height: "380px",
            borderRadius: "15px",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto", // Center the div horizontally
            padding: "20px", // Add padding for better spacing
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10px",
            }}
          >
            <h1 style={{ fontSize: 25, color: "#200CE8", fontWeight: "700" }}>
              K L E TECHNOLOGICAL UNIVERSITY <br />
              <h1 style={{ textAlign: "center" }}>HUBLI</h1>
            </h1>
            <h1
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "#F47B09",
                textTransform: "uppercase",
              }}
            >
              Login To Result Analysis
            </h1>
          </div>
          <div
            style={{
              color: "black",
              marginTop: "10px",
              marginBottom: "10px", // Add margin between the two input fields
            }}
          >
            <input
              type="text"
              value={email}
              style={{
                color: "black",
                padding: "3px",
                width: "300px",
                borderRadius: "10px",
                border: "2px solid black",
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div style={{}}>
            <input
              type="password"
              value={password}
              style={{
                color: "black",
                padding: "3px",
                width: "300px",
                borderRadius: "10px",
                border: "2px solid black",
              }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>{" "}
          <h1 style={{ color: "blue" }}>Forgot Password ?</h1>{" "}
          <button
            onClick={() => handleLogin()}
            style={{
              width: "120px",
              backgroundColor: "blue",
              marginTop: "15px",
              color: "white",
              padding: "5px",
              fontSize: 14,
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
