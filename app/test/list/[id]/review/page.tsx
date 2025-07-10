"use client";

import { useReviewTour } from "@/app/_hooks";
import { Textarea } from "@/components/ui/textfield";
import { useTourStore } from "@/store/useTourStore";
import { Button, Text } from "@vapor-ui/core";
import { CloseOutlineIcon, LikeThumbIcon, DislikeThumbIcon } from "@vapor-ui/icons";
import { useRouter } from "next/navigation";
import { use, useRef, useState } from "react";

export default function Review({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [liked, setLiked] = useState(true);
  const reviewRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: review } = useReviewTour();
  const { recommendTour } = useTourStore();

  const goBack = () => {
    router.back();
  };

  const saveReview = () => {
    if (!reviewRef.current) return;
    review(
      { id, review: reviewRef.current.value, liked },
      {
        onSuccess() {
          router.push("/home");
        },
      }
    );
  };

  return (
    <div className="w-[100%] bg-white" style={{ height: "100vh" }}>
      <div className="flex justify-end p-6 hover:cursor-pointer" onClick={goBack}>
        <CloseOutlineIcon width={24} height={24} />
      </div>

      <div className="flex flex-col w-[100%] h-[90%] justify-center items-center">
        <Text typography="heading3" className="text-black text-center">
          {recommendTour.title}
          <br /> 어떠셨나요?
        </Text>
        <div className="flex gap-4 justify-center mt-15">
          <Button
            className={`w-[135px] h-[85px] border ${liked ? "border-[#ff6500] bg-[#fff3eb]" : "border-[#E1E1E8] bg-[#fdfdfe]"}`}
            onClick={() => setLiked(true)}
          >
            <LikeThumbIcon width={28} height={27} color={liked ? "#ff6500" : "#B4B4B4"} />
          </Button>
          <Button
            className={`w-[135px] h-[85px] border ${!liked ? "border-[#ff6500] bg-[#fff3eb]" : "border-[#E1E1E8] bg-[#fdfdfe]"}`}
            onClick={() => setLiked(false)}
          >
            <DislikeThumbIcon width={28} height={27} color={!liked ? "#ff6500" : "#B4B4B4"} />
          </Button>
        </div>
        <Textarea
          ref={reviewRef}
          placeholder="나만의 추억을 공유해주세요. (최대 50자)"
          className="w-[80%] mt-10 h-[250px] resize-none p-5 .placeholder-[##AAAAAA]"
          style={{ borderColor: "color-border-secondary", backgroundColor: "#f0f0f5" }}
        />

        <div className="w-[80%]">
          <Button className="mt-20 bg-[#ff6500]" size="xl" stretch onClick={saveReview}>
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
}
