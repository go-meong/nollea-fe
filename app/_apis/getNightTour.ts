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
};

export const getNightTour = async (id: string): Promise<ApiResponse<NightTour>> => {
  const response = await http.get(`/api/night-tour/${id}`);
  return response.data;
};
