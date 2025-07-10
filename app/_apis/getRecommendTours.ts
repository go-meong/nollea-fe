import { ApiResponse, http } from "../_lib/http";

type Request = {
  companionType: string;
  travelMethod: string;
  placeMood: string;
  activity: string;
};

type RecommendTour = {
  id: string;
  categoryList: ("FOOD" | "NIGHT_MARKET" | "NATURE" | "FESTIVAL" | "WALKING_PATH" | "NIGHT_VIEW" | "ROMANTIC")[];
  fullAddress: string;
  title: string;
  coordinates: [number, number];
  serviceHours: [string, string];
};

export const getRecommendTours = async (request: Request): Promise<ApiResponse<RecommendTour[]>> => {
  const response = await http.get("/api/v1/recommend-tour", {
    params: request,
  });
  return response.data;
};
