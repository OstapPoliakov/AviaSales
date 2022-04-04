import axios from "axios";

const ticketsAPI = {
  getSearchId() {
    return axios
      .get(`https://front-test.beta.aviasales.ru/search`)
      .catch((err) => console.log("error: ", err));
  },
  getTickets(searchId) {
    return axios
      .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .catch((err) => console.log("error: ", err));
  },
};

export default ticketsAPI;
