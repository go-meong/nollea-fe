"use client";

import CommonCard from "@/app/_components/CommonCard";
import { useRecommendTours } from "@/app/_hooks";
import { useSelectStore } from "@/app/_store/useSelectStore";
import { IRecommendTour, useTourStore } from "@/app/_store/useTourStore";
import Loading from "@/app/test/_components/step/Loading";
import { Text } from "@vapor-ui/core";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function Page() {
  const { join, vehicle, mood, activity } = useSelectStore();
  const { setRecommendTour } = useTourStore();

  const { data, isLoading } = useRecommendTours({
    companionType: join as string,
    travelMethod: vehicle as string,
    placeMood: mood as string,
    activity: activity as string,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      {/* 지도 */}
      <div className="fixed top-0 w-full max-w-[600px]">
        <Map level={10} center={{ lat: 33.36167, lng: 126.52917 }} style={{ width: "100%", height: "400px" }}>
          {data?.data.map((tour) => (
            <MapMarker key={tour.title} position={{ lat: tour.coordinates[0], lng: tour.coordinates[1] }}></MapMarker>
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
            {data?.data.map((tour: IRecommendTour) => (
              <CommonCard
                key={tour.id}
                id={tour.id}
                imgUrl={tour.imageUrl}
                badges={tour.categoryList}
                title={tour.title}
                location={tour.fullAddress}
                time={tour.serviceHours}
                lat={tour.coordinates[0]}
                lon={tour.coordinates[1]}
                onClick={() => setRecommendTour(tour)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
