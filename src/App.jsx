import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import BasicGrid from "./components/BasicGrid";
import ticketsAPI from "./api/api";
import { getTicketsThunk } from "./toolkitRedux/Reducer";
import Preloader from "./components/common/Preloader/Preloader";

function App() {
  const [searchId, setSID] = useState("");
  /*   const [tickets, setTickets] = useState([]); */

  /*   const ticketsRedux = useSelector((state) => state.tickets.tickets); */
  const { status, error, stop } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  function getSearchIdFromServer() {
    ticketsAPI.getSearchId().then((res) => setSID(res.data.searchId));
  }

  /*   const getTicketsFromServer = async () => {
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
  }; */

  const getTicketsFromServer = async () => {
    try {
      await dispatch(getTicketsThunk(searchId));
      console.log("stop:", stop);
      //      setTickets((prev) => [data, ...prev]);
      if (stop !== true) await getTicketsFromServer();
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
      /*       dispatch(getTicketsThunk(searchId)); */
    }
  }, [searchId]);

  return (
    <div className="App">
      {status === "loading" && <Preloader />}
      {error && <h2>Error occured: {error}</h2>}
      <BasicGrid />
    </div>
  );
}

export default App;
