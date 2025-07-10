"use client";

import CommonCard from "../_components/common/CommonCard";
import { useNightTours } from "../_hooks";
import Header from "./_components/Header";

export default function Page() {
  const { data: nightTours } = useNightTours();

  return (
    <div className="flex-1 relative">
      <Header />
      <div className="flex-1 flex flex-col mt-14 gap-5">
        {nightTours.data.map((tour) => (
          <CommonCard
            key={tour.title}
            id={tour.id}
            imgUrl={tour.imageUrl}
            badges={tour.categoryList}
            title={tour.title}
            location={tour.fullAddress}
            time={tour.serviceHours}
            lat={tour.coordinates?.[0]}
            lon={tour.coordinates?.[1]}
          />
        ))}
      </div>
    </div>
  );
}
