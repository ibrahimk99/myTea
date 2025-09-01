"use client";
import { useState } from "react";

const addClients = () => {
  const [name, setName] = useState("");
  const addClient = async () => {
    let response = await fetch("http://localhost:3000/api/clients", {
      method: "post",
      body: JSON.stringify({ name }),
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Client Name"
        />
      </div>
      <button onClick={addClient}>Add Client</button>
    </div>
  );
};
export default addClients;
