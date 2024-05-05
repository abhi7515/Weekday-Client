import React from "react";
import Card from "../Card/Card";
import "./RenderDashboard.css";
import Header from "../Header/Header";

const RenderDashboard = ({ data }) => {
  return (
    <>
    <Header />
    <div class="container">
      {Array.isArray(data) && data.map((item, index) => (
        <Card data={item}/>
      ))}
    </div>
    </>
  );
};

export default RenderDashboard;