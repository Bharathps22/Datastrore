import React, { useState } from "react";

const DataStoreBackupApp = () => {
  const [data, setData] = useState(""); // State to store input data
  const [storedData, setStoredData] = useState(
    JSON.parse(localStorage.getItem("appData")) || []
  ); // Load existing data from localStorage

  // Handle input change
  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  // Save data to localStorage
  const saveData = () => {
    if (data.trim() === "") {
      alert("Please enter some data before saving.");
      return;
    }

    const updatedData = [...storedData, data];
    localStorage.setItem("appData", JSON.stringify(updatedData));
    setStoredData(updatedData);
    setData("");
    alert("Data saved successfully!");
  };

  // Backup data as JSON file
  const backupData = () => {
    const blob = new Blob([JSON.stringify(storedData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup.json";
    a.click();
    URL.revokeObjectURL(url);
    alert("Backup downloaded!");
  };

  // Clear localStorage data
  const clearData = () => {
    if (window.confirm("Are you sure you want to clear all stored data?")) {
      localStorage.removeItem("appData");
      setStoredData([]);
      alert("All data cleared!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Data Store and Backup App</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={data}
          onChange={handleInputChange}
          placeholder="Enter data here"
          style={{ padding: "10px", width: "300px" }}
        />
        <button onClick={saveData} style={{ padding: "10px", marginLeft: "10px" }}>
          Save Data
        </button>
      </div>

      <div>
        <h3>Stored Data:</h3>
        {storedData.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <ul>
            {storedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={backupData} style={{ padding: "10px", marginRight: "10px" }}>
          Backup Data
        </button>
        <button onClick={clearData} style={{ padding: "10px", backgroundColor: "red", color: "white" }}>
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default DataStoreBackupApp;
