"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const clients = () => {
  const [clients, setClients] = useState();
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
    setClients(data);
    setLoading(false);
  }
  return (
    <>
      <Header></Header>
      <div className="body">
        {loading ? <h1>Loading</h1> : <h1>Hi im client</h1>}
      </div>
      <Footer></Footer>
    </>
  );
};
export default clients;
