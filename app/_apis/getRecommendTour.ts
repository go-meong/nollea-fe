import { ApiResponse, http } from "../_lib/http";

type RecommendTour = {
  id: string;
  fullAddress: string;
  title: string;
  serviceHours: [string, string];
  description: string;
  congestionLevel: string;
  lastBusInfo: string;
  positiveInfo: number;
  negativeInfo: number;
  reviews: string[];
  imageUrl: string;
};

export const getRecommendTour = async (id: string): Promise<ApiResponse<RecommendTour>> => {
  const response = await http.get(`/api/v1/recommend-tour/${id}`);
  return response.data;
};
