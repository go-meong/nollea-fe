import { TCategoryList } from "@/app/_apis/getNightTour";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IRecommendTour {
  id: string;
  categoryList: TCategoryList[];
  fullAddress: string;
  title: string;
  description: string;
  recommendReason: string;
  reviews: string[];
  reviewRatios: number[];
  coordinates: number[];
  serviceHours: string[];
  imageUrl: string;
}

interface TourState {
  recommendTour: IRecommendTour;
}

interface TourAction {
  setRecommendTour: (recommendTour: IRecommendTour) => void;
}

export const useTourStore = create<TourState & TourAction>()(
  devtools((set) => ({
    tourCoordinates: {
      id: "",
      categoryList: [],
      fullAddress: "",
      title: "",
      coordinates: [],
      serviceHours: [],
    },
    recommendTour: null,

    setRecommendTour: (recommendTour) => set({ recommendTour }),
  }))
);
