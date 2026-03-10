import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getPlants = async () => {

  const res = await API.get("/plants");

  return res.data;

};