import axios from "axios";

export default {
  // get all saved graph pairs
  getPairs: function () {
    return axios.get("/api/pairs");
  },
  // deletes the saved pair with the given id
  deletePair: function (id) {
    return axios.delete("/api/pairs/" + id);
  },
  // saves a pair to the database
  savePair: function (pairData) {
    return axios.post("/api/pairs", pairData);
  }
};
