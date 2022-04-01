import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import BasicGrid from "./components/BasicGrid";
import ticketsAPI from "./api/api";
import { getTicketsThunk } from "./toolkitRedux/Reducer";

function App() {
  const [searchId, setSID] = useState("");
  const [tickets, setTickets] = useState([]);
  const ticketsRedux = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();

  /*   function getSearchIdFromServer() {
    ticketsAPI
      .getSearchId()
      .then((res) => ticketsAPI.getTickets(res.data.searchId))
      .then((res) => console.log(res));
  } */

  console.log("searchId:", searchId);
  console.log("tickets: ", tickets);
  console.log("ticketsRedux: ", ticketsRedux);

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
      dispatch(getTicketsThunk(searchId));
    }
  }, [searchId]);

  return (
    <div className="App">
      <BasicGrid />
    </div>
  );
}

export default App;
