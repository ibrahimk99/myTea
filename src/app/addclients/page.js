"use client";
import { useState } from "react";

const addClients = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const addClient = async () => {
    let response = await fetch("http://localhost:3000/api/clients", {
      method: "post",
      body: JSON.stringify({ name, phone }),
    });
    response = await response.json();
    if (response.success) {
      const { result } = response;
      console.log("this is result " + result);
    }
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
      <div>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Client Phone"
        />
      </div>
      <button onClick={addClient}>Add Client</button>
    </div>
  );
};
export default addClients;
