"use client";

import { useRecommendTours } from "@/app/_hooks";
import { useSelectStore } from "@/store/useSelectStore";
import { useTourStore } from "@/store/useTourStore";
import { Text } from "@vapor-ui/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const { join, vehicle, mood, activity } = useSelectStore();
  const { setRecommendTours } = useTourStore();
  const { data, isLoading } = useRecommendTours({
    companionType: join as string,
    travelMethod: vehicle as string,
    placeMood: mood as string,
    activity: activity as string,
  });

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (data && !isLoading) {
        setRecommendTours(data.data);
        router.push("/test/list");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <div className="mt-40 flex flex-col flex-1 relative">
      <Text typography="heading2" style={{ color: "var(--vapor-color-white)" }} className="text-center mb-12">
        제주에 어떤 밤이
        <br />
        기다리고 있을까요?
      </Text>

      <Image src="/loading.png" width={282} height={243} alt="loading" />
    </div>
  );
}
