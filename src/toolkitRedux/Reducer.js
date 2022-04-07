import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketsAPI from "../api/api";

export const getTicketsThunk = createAsyncThunk(
  "tickets/getTicketsThunk",
  async function (searchId, { rejectWithValue }) {
    try {
      const { data } = await ticketsAPI.getTickets(searchId).then((res) => res);
      console.log("data: ", data);
      console.log("stop thunk: ", data.stop);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    stop: "xyu",
    status: null,
    error: null,
  },
  reducers: {
    setTickets(state, action) {
      state.tickets.push({
        tickets: action.payload.tickets,
        stop: action.payload.stop,
      });
    },
  },
  extraReducers: {
    [getTicketsThunk.pending]: (state) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      state.status = "loading";
      state.error = null;
    },
    [getTicketsThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.tickets = action.payload.tickets;
      state.stop = action.payload.stop;
      console.log("payload.stop:", action.payload.stop);
      console.log("state.stop:", state.stop);
    },
    [getTicketsThunk.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

/* export const { setTickets } = ticketSlice.actions; */

export default ticketSlice.reducer;
