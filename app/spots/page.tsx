"use client";

import { useTourStore } from "@/app/_store/useTourStore";
import CommonCard from "../_components/CommonCard";
import { useNightTours } from "../_hooks";
import Header from "./_components/Header";
import UploadButton from "./_components/UploadButton";

export default function Page() {
  const { data: nightTours } = useNightTours();
  const { setRecommendTour } = useTourStore();

  return (
    <div className="flex-1 relative">
      <Header />
      <div className="flex-1 flex flex-col py-14 gap-5 px-6">
        {nightTours.data.map((tour) => (
          <CommonCard
            key={tour.id}
            id={tour.id}
            imgUrl={tour.imageUrl}
            badges={tour.categoryList}
            title={tour.title}
            location={tour.fullAddress}
            time={tour.serviceHours}
            lat={tour.coordinates?.[0]}
            lon={tour.coordinates?.[1]}
            onClick={() => setRecommendTour(tour)}
          />
        ))}
      </div>
      <UploadButton />
    </div>
  );
}
