import { useQuery } from "@tanstack/react-query";
import { getNightTour } from "../_apis/getNightTour";
import { getNightTours } from "../_apis/getNightTours";

// 모든 야간 투어 목록 조회
export const useNightTours = () => {
  return useQuery({
    queryKey: ["nightTours"],
    queryFn: getNightTours,
  });
};

// 특정 야간 투어 조회
export const useNightTour = (id: string) => {
  return useQuery({
    queryKey: ["nightTour", id],
    queryFn: () => getNightTour(id),
  });
};
