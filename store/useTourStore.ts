import { TCategoryList } from "@/app/_apis/getNightTour";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IRecommendTour {
  id: string;
  categoryList: TCategoryList[];
  fullAddress: string;
  title: string;
  reviews: string[];
  reviewRatios: number[];
  coordinates: number[];
  description: string;
  serviceHours: string[];
}

interface TourState {
  recommendTour: IRecommendTour;
  // recommendTours: IRecommendTour[];
}

interface TourAction {
  setRecommendTour: (recommendTour: IRecommendTour) => void;
  // setRecommendTours: (recommendTours: IRecommendTour[]) => void;
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
    // setRecommendTours: (recommendTours) => set({ recommendTours }),
  }))
);
