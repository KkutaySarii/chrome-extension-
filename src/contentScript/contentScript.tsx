// function OnLoad() {
//     window.onload = () => {
//         console.log("I'm from content script")
//     }
// }

// export { OnLoad };

import React from "react";

export default function ContentScript() {
  console.log("Hello Google");
  return (
    <div className="top-0">
      <div> Hello Google</div>
    </div>
  );
}
