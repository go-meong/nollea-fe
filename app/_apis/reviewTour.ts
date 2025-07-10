import { http } from "../_lib/http";

export const reviewTour = async ({ id, review, liked }: { id: string; review: string; liked: boolean }) => {
  const response = await http.post(`/api/v1/recommend-tour/review`, {
    id,
    review,
    liked,
  });
  return response.data;
};
