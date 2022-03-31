import axios from "axios";

const ticketsAPI = {
  getSearchId() {
    return axios
      .get(`https://front-test.beta.aviasales.ru/search`)
      .catch((err) => alert(err));
  },
  getTickets(searchId) {
    return axios
      .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .catch((err) => alert(err));
  },
};

export default ticketsAPI;
