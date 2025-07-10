import { Text } from "@vapor-ui/core";
import Image from "next/image";
import CommonBadge from "./CommonBadge";
import getDistance from "@/app/_lib/getDistance";
import { useRouter } from "next/navigation";
import { TCategoryList } from "@/app/_apis/getNightTour";
import { useEffect, useState } from "react";

interface ICard {
  id: string;
  imgUrl: string;
  badges: TCategoryList[];
  title: string;
  location: string;
  lat: number;
  lon: number;
  time: string[];
}

export default function CommonCard({ id, imgUrl, badges, title, location, lat, lon, time }: ICard) {
  const router = useRouter();
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLon, setUserLon] = useState<number | null>(null);

  useEffect(() => {
    if (!navigator) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      setUserLat(lat);
      const lon = position.coords.longitude;
      setUserLon(lon);
    });
  }, []);

  const handleClick = () => {
    router.push(`/test/list/${id}`);
  };

  return (
    <div className="flex w-full gap-4 bg-white p-4 rounded-sm hover:cursor-pointer" onClick={handleClick}>
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
        {userLat && userLon && <Text typography="body3">거리: {getDistance(userLat, userLon, lat, lon)}km</Text>}
        <Text typography="body3">
          운영시간: {time[0]} ~ {time[1]}
        </Text>
      </div>
    </div>
  );
}
