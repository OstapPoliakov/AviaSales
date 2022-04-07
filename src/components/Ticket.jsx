import { useDispatch } from "react-redux";
import React from "react";
/* import { removeTodo, toggleTodoComplete } from "../Store/todoSlice"; */

function TicketItem({ price, segments }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{price}</span>
      <br />
    </li>
  );
}

export default TicketItem;
