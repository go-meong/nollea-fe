import axios from "axios";

export type ApiResponse<T> = {
  data: T;
};

export const http = axios.create({
  baseURL: "https://nollea-backend.goorm.training",
});
