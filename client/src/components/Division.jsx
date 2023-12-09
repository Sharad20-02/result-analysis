import React from "react";
import a from "../assets/a.jpg";
const Division = () => {
  return (
    <div className="h-72 w-80  bg-yellow-500 " style={{ borderRadius: "10px" }}>
      <div style={{ height: "75%", width: "100%", borderRadius: "10px" }}>
        <img
          src={a}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default Division;
