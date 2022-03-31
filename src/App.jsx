import React, { useEffect, useState } from "react";
import "./App.css";
import BasicGrid from "./components/BasicGrid";
import ticketsAPI from "./api/api";

function App() {
  const [searchId, setSID] = useState("");
  const [tickets, setTickets] = useState([]);

  /*   function getSearchIdFromServer() {
    ticketsAPI
      .getSearchId()
      .then((res) => ticketsAPI.getTickets(res.data.searchId))
      .then((res) => console.log(res));
  } */

  console.log("searchId:", searchId);
  console.log("tickets", tickets);

  function getSearchIdFromServer() {
    ticketsAPI.getSearchId().then((res) => setSID(res.data.searchId));
  }

  const getTicketsFromServer = async () => {
    try {
      const { data } = await ticketsAPI.getTickets(searchId).then((res) => res);
      console.log("data:", data);
      setTickets((prev) => [data, ...prev]);
      if (data.stop !== true) await getTicketsFromServer();
    } catch (e) {
      console.log("err:", e);
      setTimeout(() => {
        getTicketsFromServer();
      }, 5000);
    }
  };

  useEffect(() => {
    getSearchIdFromServer();
  }, []);

  useEffect(() => {
    if (searchId) {
      getTicketsFromServer();
    }
  }, [searchId]);

  return (
    <div className="App">
      <BasicGrid />
    </div>
  );
}

export default App;
