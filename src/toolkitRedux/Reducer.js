import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketsAPI from "../api/api";

export const getTicketsThunk = createAsyncThunk(
  "tickets/getTicketsThunk",
  async (searchId) => {
    const response = await ticketsAPI.getTickets(searchId);
    /*       dispatch(setTickets(response.data)); */
    return response.data;
  }
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [
      /* // Цена в рублях
        price: 0,
        // Код авиакомпании (iata)
        carrier: '',
        // Массив перелётов.
        // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
        segments: [
          {
            // Код города (iata)
            origin: '',
            // Код города (iata)
            destination: '',
            // Дата и время вылета туда
            date: '',
            // Массив кодов (iata) городов с пересадками
            stops: [],
            // Общее время перелёта в минутах
            duration: 0,
          },
          {
            // Код города (iata)
            origin: '',
            // Код города (iata)
            destination: '',
            // Дата и время вылета обратно
            date: '',
            // Массив кодов (iata) городов с пересадками
            stops: [],
            // Общее время перелёта в минутах
            duration: 0, */
    ],
    stop: false,
    status: null,
    error: false,
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
      state.status = "loading...";
      state.error = false;
    },
    [getTicketsThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.tickets = action.payload;
    },
    [getTicketsThunk.rejected]: (state) => {
      state.error = true;
      state.status = "rejected";
    },
  },
});

/* export const { setTickets } = ticketSlice.actions; */

export default ticketSlice.reducer;
