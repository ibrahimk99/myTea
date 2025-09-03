"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import { useEffect } from "react";
const clientId = () => {
  const params = useParams();
  const id = params.clientId;
  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/clients/" + id, {
      method: "get",
    });
    const data = await response.json();
    console.log("clientsId data", data);
  }, []);
  return (
    <div>
      <Header />
      <div className="header-footer">
        <div>Client ID: {id}</div>
      </div>
      <Footer />
    </div>
  );
};
export default clientId;
