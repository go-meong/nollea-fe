"use client";

import CommonCard from "@/app/_components/common/CommonCard";
import CustomMap from "@/app/_components/CustomMap";
import { Text } from "@vapor-ui/core";
import { useEffect, useState } from "react";

export default function Page() {
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

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* 지도 */}
      <div className="w-full h-full">
        <CustomMap />
      </div>

      {/* list */}
      <div className="w-full absolute left-0 bottom-0 h-[70%] rounded-t-3xl">
        <div className="w-full mx-auto flex flex-col gap-4 pt-12 pb-5 px-5">
          <Text typography="heading3" foreground="accent" className="text-center mb-3">
            특별한 제주의 밤을 즐겨보세요!
          </Text>
          <CommonCard
            id={0}
            imgUrl="/ex-img.png"
            badges={["야경", "로맨틱", "야시장"]}
            title="title"
            location="location"
            time="time"
            userLat={userLat}
            userLon={userLon}
            lat={123}
            lon={10}
          />
          <CommonCard
            id={1}
            imgUrl="/ex-img.png"
            badges={["야경", "로맨틱", "야시장"]}
            title="title"
            location="location"
            time="time"
            userLat={userLat}
            userLon={userLon}
            lat={123}
            lon={10}
          />
          <CommonCard
            id={2}
            imgUrl="/ex-img.png"
            badges={["야경", "로맨틱", "야시장"]}
            title="title"
            location="location"
            time="time"
            userLat={userLat}
            userLon={userLon}
            lat={123}
            lon={10}
          />
        </div>
      </div>
    </div>
  );
}
