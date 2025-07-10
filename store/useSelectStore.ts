import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TJoin = "혼자" | "친구" | "연인" | "가족" | "동료" | "기타" | null;
export type TVehicle = "도보" | "대중교통" | "자가용" | "렌트카" | null;
export type TMood = "차분" | "로맨틱" | "신남" | "특별함" | "힐링" | "기쁨" | null;
export type TActivity = "산책" | "공연" | "맛집" | "체험" | null;

interface SelectState {
  join: TJoin;
  vehicle: TVehicle;
  mood: TMood;
  activity: TActivity;
}

interface SelectAction {
  setJoin: (join: TJoin) => void;
  setVehicle: (vehicle: TVehicle) => void;
  setMood: (mood: TMood) => void;
  setActivity: (activity: TActivity) => void;
}

export const useSelectStore = create<SelectState & SelectAction>()(
  devtools((set) => ({
    join: null,
    vehicle: null,
    mood: null,
    activity: null,

    setJoin: (join) => set({ join }),
    setVehicle: (vehicle) => set({ vehicle }),
    setMood: (mood) => set({ mood }),
    setActivity: (activity) => set({ activity }),
  }))
);
