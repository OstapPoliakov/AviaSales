import { useSelector } from "react-redux";
import React from "react";
import TicketItem from "./Ticket";

function TicketsList() {
  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <ul>
      {tickets.map((ticket) => (
        /* eslint-disable react/jsx-props-no-spreading */
        <TicketItem key={ticket.segments[0].date} {...ticket} />
      ))}
    </ul>
  );
}

export default TicketsList;
