import axios from "axios";
const API_URL = "https://api.oqart.com/api/";
const addUser = (data) => {
  console.log(data);
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(API_URL + "contact-save", data, { headers: headers });
};

const ContactService = {
  addUser,
};
export default ContactService;
