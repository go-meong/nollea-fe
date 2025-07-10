import { TCategoryList } from "@/app/_apis/getNightTour";
import { Badge } from "@vapor-ui/core";

interface ICommonBadge {
  type: TCategoryList;
}

const badgeText = {
  FOOD: "음식점",
  NIGHT_MARKET: "야시장",
  NATURE: "자연",
  FESTIVAL: "축제",
  WALKING_PATH: "산책길",
  NIGHT_VIEW: "야경",
  ROMANTIC: "로맨틱",
};

const badgeColor = {
  FOOD: "#923304",
  NIGHT_MARKET: "#006355",
  NATURE: "#004644",
  FESTIVAL: "#37007D",
  WALKING_PATH: "#003351",
  NIGHT_VIEW: "#37007D",
  ROMANTIC: "#27001E",
};

const badgeBackgroundColor = {
  FOOD: "#ffe6d6",
  NIGHT_MARKET: "#d8e4e3",
  NATURE: "#e0f9d6",
  FESTIVAL: "#eee2ff",
  WALKING_PATH: "#d6f0ff",
  NIGHT_VIEW: "#eee2ff",
  ROMANTIC: "#f9d6f6",
};

export default function CommonBadge({ type }: ICommonBadge) {
  return (
    <Badge className={`bg-[${badgeBackgroundColor[type]}] text-[${badgeColor[type]}]`} size="md" shape="pill">
      {badgeText[type]}
    </Badge>
  );
}
