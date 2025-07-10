import { ApiResponse, http } from "../_lib/http";

export type TCategoryList =
  | "FOOD"
  | "NIGHT_MARKET"
  | "NATURE"
  | "FESTIVAL"
  | "WALKING_PATH"
  | "NIGHT_VIEW"
  | "ROMANTIC";

type NightTour = {
  id: string;
  title: string;
  fullAddress: string;
  zipcode: string;
  categoryList: TCategoryList[];
  serviceHours: [string, string];
  description: string;
  imageUrl: string;
  coordinates: [number, number];
};

export const getNightTour = async (id: string): Promise<ApiResponse<NightTour>> => {
  const response = await http.get(`/api/night-tour/${id}`);
  return response.data;
};
