import axios from "axios";

export const http = axios.create({
  baseURL: "https://nollea-backend.goorm.training",
});
