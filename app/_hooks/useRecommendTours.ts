import { useQuery } from "@tanstack/react-query";
import { getRecommendTour } from "../_apis/getRecommendTour";
import { getRecommendTours } from "../_apis/getRecommendTours";

type RecommendToursRequest = {
  companionType: string;
  travelMethod: string;
  placeMood: string;
  activity: string;
};

// 추천 투어 목록 조회
export const useRecommendTours = (request: RecommendToursRequest) => {
  return useQuery({
    queryKey: ["recommendTours", request],
    queryFn: () => getRecommendTours(request),
  });
};

// 특정 추천 투어 조회
export const useRecommendTour = (id: string) => {
  return useQuery({
    queryKey: ["recommendTour", id],
    queryFn: () => getRecommendTour(id),
  });
};
