import { Text } from "@vapor-ui/core";
import Image from "next/image";
import CommonBadge, { TBadge } from "./CommonBadge";
import getDistance from "@/app/_lib/getDistance";

interface ICard {
  imgUrl: string;
  badges: TBadge[];
  title: string;
  location: string;
  userLat: number | null;
  userLon: number | null;
  lat: number;
  lon: number;
  time: string;
}

export default function CommonCard({ imgUrl, badges, title, location, userLat, userLon, lat, lon, time }: ICard) {
  return (
    <div className="flex w-full gap-4 bg-white p-4 rounded-sm">
      <div className="relative w-[108px] h-[108px] shrink-0">
        <Image src={imgUrl} alt="img" layout="fill" objectFit="cover" className="rounded-sm" />
      </div>
      <div className="flex flex-col min-w-0">
        <div className="flex gap-2">
          {badges.map((badge, index) => (
            <CommonBadge key={`${badge}${index}`} type={badge} />
          ))}
        </div>
        <Text typography="heading5" className="truncate whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </Text>
        <Text typography="body4">{location}</Text>
        <Text typography="body3">거리: {userLat && userLon ? `${getDistance(userLat, userLon, lat, lon)}km` : ""}</Text>
        <Text typography="body3">운영시간: {time}</Text>
      </div>
    </div>
  );
}
