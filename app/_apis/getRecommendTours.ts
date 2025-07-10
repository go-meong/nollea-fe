import { IRecommendTour } from "@/app/_store/useTourStore";
import { ApiResponse, http } from "../_lib/http";

type Request = {
  companionType: string;
  travelMethod: string;
  placeMood: string;
  activity: string;
};

export const getRecommendTours = async (request: Request): Promise<ApiResponse<IRecommendTour[]>> => {
  const response = await http.get("/api/v1/recommend-tour", {
    params: request,
  });
  return response.data;
};
