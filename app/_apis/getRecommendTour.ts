import { IRecommendTour } from "@/store/useTourStore";
import { ApiResponse, http } from "../_lib/http";

export const getRecommendTour = async (id: string): Promise<ApiResponse<IRecommendTour>> => {
  const response = await http.get(`/api/v1/recommend-tour/${id}`);
  return response.data;
};
