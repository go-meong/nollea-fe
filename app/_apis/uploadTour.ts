import { http } from "../_lib/http";

type Request = {
  fullAddress: string;
  title: string;
  zipcode: string;
  serviceHours: [string, string];
  categoryList: ("FOOD" | "NIGHT_MARKET" | "NATURE" | "FESTIVAL" | "WALKING_PATH" | "NIGHT_VIEW" | "ROMANTIC")[];
  description: string;
  imageId: string;
};

export const uploadTour = async (request: Request) => {
  const response = await http.post("/api/v1/night-tour", request);
  return response.data;
};
