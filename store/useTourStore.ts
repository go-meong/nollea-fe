import { TCategoryList } from "@/app/_apis/getNightTour";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IRecommendTour {
  id: string;
  categoryList: TCategoryList[];
  fullAddress: string;
  title: string;
  coordinates: number[];
  serviceHours: string[];
}

interface TourState {
  recommendTours: IRecommendTour[];
}

interface TourAction {
  setRecommendTours: (recommendTours: IRecommendTour[]) => void;
}

export const useTourStore = create<TourState & TourAction>()(
  devtools((set) => ({
    recommendTours: [],

    setRecommendTours: (recommendTours) => set({ recommendTours }),
  }))
);
