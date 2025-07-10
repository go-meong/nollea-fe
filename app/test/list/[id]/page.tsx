"use client";

import { use } from "react";
import { Button, Text } from "@vapor-ui/core";
import { CloseOutlineIcon, LikeThumbIcon, DislikeThumbIcon } from "@vapor-ui/icons";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";
import Image from "next/image";
import CommonBadge from "@/app/_components/common/CommonBadge";
import { useRouter } from "next/navigation";
import { Map } from "react-kakao-maps-sdk";
import { useTourStore } from "@/store/useTourStore";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const { recommendTour } = useTourStore();
  const { title, fullAddress, description, serviceHours, coordinates, reviewRatios, reviews } = recommendTour;

  const goBack = () => {
    router.back();
  };

  const makeReview = () => {
    router.push(`/test/list/${id}/review`);
  };

  return (
    <div className="w-[100%] h-full flex flex-col justify-between">
      {/* cancel button */}
      <div onClick={goBack} className="fixed z-999 top-8 right-8 rounded-4xl bg-white w-[24px] h-[24px] hover:cursor-pointer">
        <div className="w-full h-full flex justify-center items-center">
          <CloseOutlineIcon />
        </div>
      </div>

      {/* background-image */}
      <div className="fixed top-0 w-[100%] h-[250px]">
        <Image src="/ex-img.png" alt="img" layout="fill" objectFit="cover" />
      </div>

      <Drawer open fixed>
        <DrawerContent className="max-w-[600px] mx-auto">
          <div className="flex-1 mx-auto w-full px-4 overflow-y-auto scrollbar-none mb-25">
            <DrawerHeader className="">
              <div className="flex gap-2">
                <CommonBadge type="FOOD" />
                <CommonBadge type="NIGHT_MARKET" />
              </div>
              <Text typography="heading2" className="text-start">
                {title}
              </Text>
              <DrawerDescription className="flex flex-col gap-2">
                <Text typography="subtitle1" className="mb-4 text-start">
                  {fullAddress}
                </Text>
                <div className="flex">
                  <Text typography="subtitle1" className="mr-4">
                    운영 시간
                  </Text>
                  <Text typography="subtitle1">{serviceHours.join(" ")}</Text>
                </div>
                <div className="flex">
                  <Text className="min-w-[52px] mr-4" typography="subtitle1">
                    한줄 설명
                  </Text>
                  <Text className="text-left whitespace-pre-line" typography="subtitle1">
                    {description}
                  </Text>
                </div>

                {/* 지도 */}
                {coordinates && (
                  <div className="my-8">
                    <Map center={{ lat: coordinates[0], lng: coordinates[1] }} style={{ width: "100%", height: "145px" }}></Map>
                  </div>
                )}

                {/* 리뷰 */}
                <div className="flex">
                  <Text typography="subtitle1" className="mr-11">
                    리뷰
                  </Text>

                  {/* 리뷰 like */}
                  <div className="flex items-center gap-1">
                    <LikeThumbIcon />
                    <Text typography="subtitle1" className="mr-4">
                      {reviewRatios[0]}%
                    </Text>
                    <DislikeThumbIcon />
                    <Text typography="subtitle1">{reviewRatios[1]}%</Text>
                  </div>
                </div>
                {/* 리뷰 comment */}
                <div className="flex flex-col ml-18 mt-3 gap-3">
                  {reviews.map((comment) => (
                    <div
                      key={comment}
                      className="text-start rounded-t-xl rounded-l-xl px-4 py-2 text-black"
                      style={{ backgroundColor: "var(--vapor-color-gray-100)" }}
                    >
                      {comment}
                    </div>
                  ))}
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="mb-6 absolute bottom-0 w-full">
              <div className="flex justify-center items-center w-full">
                <Button className="bg-[#ff6500] w-[90%]" size="xl" stretch onClick={makeReview}>
                  리뷰 남기기
                </Button>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
