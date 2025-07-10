import { Badge } from "@vapor-ui/core";

type TTrafficBadge = "여유" | "보통" | "혼잡";

interface ITrafficBadge {
  type: TTrafficBadge;
}

const badgeBackgroundColor = {
  여유: "#47EC00",
  보통: "#FFAA00",
  혼잡: "#E00606",
};

export default function TrafficBadge({ type }: ITrafficBadge) {
  return <Badge className={`text-white bg-[${badgeBackgroundColor[type]}]`}>{type}</Badge>;
}
