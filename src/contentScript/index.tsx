// import * as contentScript from "./contentScript";

// contentScript.OnLoad();

import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import ContentScript from "./contentScript";

function init() {
  const appContainer = document.createElement("div");
  if (!appContainer) {
    throw new Error("Can not find appcontainer");
  }
  document.body.appendChild(appContainer);
  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();
