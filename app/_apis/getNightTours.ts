import { ApiResponse, http } from "../_lib/http";

type NightTour = {
  id: string;
  title: string;
  fullAddress: string;
  zipcode: string;
  categoryList: ("FOOD" | "NIGHT_MARKET" | "NATURE" | "FESTIVAL" | "WALKING_PATH" | "NIGHT_VIEW" | "ROMANTIC")[];
  serviceHours: [string, string];
  description: string;
  imageUrl: string;
  coordinates: [number, number];
  recommendReason: string;
  reviews: string[];
  reviewRatios: [number, number];
};

export const getNightTours = async (): Promise<ApiResponse<NightTour[]>> => {
  const response = await http.get("/api/v1/night-tour");
  return response.data;
};
