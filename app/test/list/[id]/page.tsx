"use client";

import { use } from "react";
import { CloseOutlineIcon, LikeThumbIcon, DislikeThumbIcon } from "@vapor-ui/icons";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader } from "@/components/ui/drawer";

import * as React from "react";
import { Button, Text } from "@vapor-ui/core";
import Image from "next/image";
import CommonBadge from "@/app/_components/common/CommonBadge";
import { useRouter } from "next/navigation";
import TrafficBadge from "@/app/_components/common/TrafficBadge";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();

  const { id } = use(params);
  console.log(id);

  const goBack = () => {
    router.back();
  };

  const makeReview = () => {
    router.push(`/test/list/${id}/review`);
  };

  return (
    <div className="w-[100%] h-full flex flex-col justify-between">
      <div onClick={goBack} className="fixed z-999 top-8 right-8 rounded-4xl bg-white w-[24px] h-[24px] hover:cursor-pointer">
        <div className="w-full h-full flex justify-center items-center">
          <CloseOutlineIcon />
        </div>
      </div>
      <div className="relative w-[100%] h-[250px]">
        <Image src="/ex-img.png" alt="img" layout="fill" objectFit="cover" />
      </div>
      <Drawer open>
        <DrawerContent className="h-[80%]">
          <div className="mx-auto w-full px-4 overflow-y-auto scrollbar-none mb-25">
            <DrawerHeader className="">
              <div className="flex gap-2">
                <CommonBadge type="음식점" />
                <CommonBadge type="야시장" />
              </div>
              <Text typography="heading2" className="text-start">
                제주 수목원길 야시장
              </Text>
              <DrawerDescription className="flex flex-col gap-2">
                <Text typography="subtitle1" className="mb-4 text-start">
                  제주특별자치도 제주시 특별자치도 은수길 69
                </Text>
                <div className="flex">
                  <Text typography="subtitle1" className="mr-4">
                    운영 시간
                  </Text>
                  <Text typography="subtitle1">운영 시간</Text>
                </div>
                <div className="flex">
                  <Text typography="subtitle1" className="mr-4">
                    한줄 설명
                  </Text>
                  <Text typography="subtitle1">운영 시간</Text>
                </div>
                {/* 지도 */}
                <div className="h-[342px] w-[145px]">지도</div>

                {/* 혼잡도 */}
                <div className="flex">
                  <Text typography="subtitle1" className="mr-8">
                    혼잡도
                  </Text>
                  <TrafficBadge type="여유" />
                </div>

                {/* 버스 막차 */}
                <div className="flex">
                  <Text typography="subtitle1" className="mr-4">
                    버스 막차
                  </Text>
                  <Text typography="subtitle1">운영 시간</Text>
                </div>

                {/* 리뷰 */}
                <div className="flex">
                  <Text typography="subtitle1" className="mr-11">
                    리뷰
                  </Text>
                  <Text typography="subtitle1">
                    <div className="flex items-center gap-1">
                      <LikeThumbIcon />
                      <Text typography="subtitle1" className="mr-4">
                        80%
                      </Text>
                      <DislikeThumbIcon />
                      <Text typography="subtitle1">20%</Text>
                    </div>
                  </Text>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="mb-6 absolute bottom-0 w-[100%]">
              <div className="flex justify-center items-center w-[100%]">
                <Button className="bg-[#ff6500] w-[80%]" size="xl" stretch onClick={makeReview}>
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
