import React from "react";
import Card from "../Card/Card";
import "./RenderDashboard.css";

const RenderDashboard = ({ data }) => {
  return (
    <div class="container">
      {Array.isArray(data) && data.map((item, index) => (
        <Card data={item}/>
      ))}
    </div>
  );
};

export default RenderDashboard;