import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewTour } from "../_apis/reviewTour";
import { uploadPicture } from "../_apis/uploadPicture";
import { uploadTour } from "../_apis/uploadTour";

type ReviewTourRequest = {
  id: string;
  review: string;
  liked: boolean;
};

type UploadTourRequest = {
  fullAddress: string;
  title: string;
  zipcode: string;
  serviceHours: [string, string];
  categoryList: ("FOOD" | "NIGHT_MARKET" | "NATURE" | "FESTIVAL" | "WALKING_PATH" | "NIGHT_VIEW" | "ROMANTIC")[];
  description: string;
  imageId: string;
};

// 투어 리뷰 작성
export const useReviewTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ReviewTourRequest) => reviewTour(data),
    onSuccess: (data, variables) => {
      // 성공 시 관련 쿼리 무효화하여 새로고침
      queryClient.invalidateQueries({ queryKey: ["recommendTour", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["recommendTours"] });
    },
  });
};

// 사진 업로드
export const useUploadPicture = () => {
  return useMutation({
    mutationFn: (picture: File) => uploadPicture(picture),
  });
};

// 투어 업로드
export const useUploadTour = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UploadTourRequest) => uploadTour(data),
    onSuccess: () => {
      // 성공 시 야간 투어 목록 새로고침
      queryClient.invalidateQueries({ queryKey: ["nightTours"] });
    },
  });
};
