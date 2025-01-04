// import React from "react";
// import ReactDOM from "react-dom";
//  // Optional: Add global styles here if needed
// import DataStoreBackupApp from "./App"; // Import the main component

// ReactDOM.render(
//   <React.StrictMode>
//     <DataStoreBackupApp />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18+
import DataStoreBackupApp from "./App"; // Import your main component

// Get the root element from the HTML file
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DataStoreBackupApp />
  </React.StrictMode>
);
