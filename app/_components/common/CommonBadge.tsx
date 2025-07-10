import { Badge } from "@vapor-ui/core";

export type TBadge = "음식점" | "야시장" | "자연" | "축제" | "산책길" | "야경" | "로맨틱";

interface ICommonBadge {
  type: TBadge;
}

const badgeColor = {
  음식점: "#923304",
  야시장: "#006355",
  자연: "#004644",
  축제: "#37007D",
  산책길: "#003351",
  야경: "#37007D",
  로맨틱: "#27001E",
};

const badgeBackgroundColor = {
  음식점: "#ffe6d6",
  야시장: "#d8e4e3",
  자연: "#e0f9d6",
  축제: "#eee2ff",
  산책길: "#d6f0ff",
  야경: "#eee2ff",
  로맨틱: "#f9d6f6",
};

export default function CommonBadge({ type }: ICommonBadge) {
  return (
    <Badge className={`bg-[${badgeBackgroundColor[type]}] text-[${badgeColor[type]}]`} size="md" shape="pill">
      {type}
    </Badge>
  );
}
