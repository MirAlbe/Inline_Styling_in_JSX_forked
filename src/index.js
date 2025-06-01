import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const customColor = {
  color: "red",
  border: "3px solid green",
  backgroundColor: "#efefef",
};

// Change properties
customColor.color = "purple";
root.render(<h1 style={customColor}>Heading One</h1>);
