"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setLoading(true);
    const response = await fetch("http://localhost:3000/api/clients", {
      method: "get",
    });
    const data = await response.json();
    console.log("clients data", data);

    setClients(data.clients);
    setLoading(false);
  }
  return (
    <>
      <Header></Header>
      <div className="header-footer">
        {clients.map((client, idx) => (
          <div key={idx++}>
            <li>
              <Link href={`/clients/${client._id}`}>{client.name}</Link>
            </li>
            <li>{client.phone}</li>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};
export default clients;
