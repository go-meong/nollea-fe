"use client";

import CommonCard from "@/app/_components/common/CommonCard";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Text } from "@vapor-ui/core";
import { useTourStore } from "@/store/useTourStore";

export default function Page() {
  const { recommendTours } = useTourStore();

  return (
    <>
      {/* 지도 */}
      <div className="fixed top-0 w-full max-w-[600px]">
        <Map center={{ lat: 393494.9999999985, lng: 32197.9999999993 }} style={{ width: "100%", height: "400px" }}>
          {recommendTours.map((recommendTour) => (
            <MapMarker key={recommendTour.title} position={{ lat: recommendTour.coordinates[0], lng: recommendTour.coordinates[1] }}>
              <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
          ))}
        </Map>
      </div>

      {/* list */}
      <div className="fixed z-10 h-[65%] w-full max-w-[600px] rounded-2xl bottom-0 bg-black overflow-y-scroll scrollbar-none">
        <div className="flex flex-col">
          <Text typography="heading3" foreground="accent" className="text-center mb-6 mt-10">
            특별한 제주의 밤을 즐겨보세요!
          </Text>
          <div className="flex flex-col gap-3 px-3">
            {recommendTours.map((tour) => (
              <CommonCard
                key={tour.title}
                id={tour.id}
                imgUrl="/ex-img.png"
                badges={tour.categoryList}
                title={tour.title}
                location={tour.fullAddress}
                time={tour.serviceHours}
                lat={tour.coordinates[0]}
                lon={tour.coordinates[1]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
