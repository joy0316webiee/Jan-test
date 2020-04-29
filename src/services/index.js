import axios from "axios";

// config
import { API_URL, USER_LIMIT } from "../config";

const listUsers = async (limit = USER_LIMIT) => {
  try {
    const { data } = await axios.get(`${API_URL}/users/?per_page=${limit}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const services = {
  listUsers,
};

export default services;
