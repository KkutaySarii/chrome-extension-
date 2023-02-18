import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import img from "../static/background.jpg";
const test = (
  <div>
    <h1 className="text-3xl text-green-400">Hello Extension</h1>
    <img src={img} alt="" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
