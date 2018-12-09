const axios = require("axios");
const BASE_URL = "http://localhost:3000";
const PLACES = "/places";

const AXIOS = {
  getPlaces: async function() {
    try {
      const resp = await axios.get(BASE_URL + PLACES);
      return resp.data.places;
    } catch (e) {
      console.log("AXIOS - request failed - Could not GET places ", e);
    }
  },
  postPlace: async function(data) {
    try {
      const resp = await axios.post(BASE_URL + PLACES, data);
      return resp;
    } catch (e) {
      console.log("AXIOS - request failed - Could not POST place ", e);
    }
  }
};

export { AXIOS };
