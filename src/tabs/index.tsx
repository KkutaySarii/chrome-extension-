import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import { HashRouter } from "react-router-dom";
import Tabs from "./tabs";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(
    <HashRouter>
      <Tabs />
    </HashRouter>
  );
}

init();
