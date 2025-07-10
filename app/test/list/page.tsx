"use client";

import CommonCard from "@/app/_components/common/CommonCard";
import { Map, MapMarker } from "react-kakao-maps-sdk";
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
    <>
      {/* 지도 */}
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "105%", height: "400px" }}>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>

      {/* list */}
      <div className="fixed z-10 h-[65%] w-full max-w-[600px] rounded-2xl bottom-0 bg-black overflow-y-scroll scrollbar-none">
        <div className="flex flex-col">
          <Text typography="heading3" foreground="accent" className="text-center mb-6 mt-10">
            특별한 제주의 밤을 즐겨보세요!
          </Text>
          <div className="flex flex-col gap-3 px-3">
            <CommonCard
              id={0}
              imgUrl="/ex-img.png"
              badges={["야경", "로맨틱"]}
              title="title"
              location="location"
              time="time"
              userLat={userLat}
              userLon={userLon}
              lat={123}
              lon={10}
            />
            <CommonCard
              id={0}
              imgUrl="/ex-img.png"
              badges={["야경", "로맨틱"]}
              title="title"
              location="location"
              time="time"
              userLat={userLat}
              userLon={userLon}
              lat={123}
              lon={10}
            />
            <CommonCard
              id={0}
              imgUrl="/ex-img.png"
              badges={["야경", "로맨틱"]}
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
    </>
  );
}
