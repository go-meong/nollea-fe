"use client";

import { Button, Text } from "@vapor-ui/core";
import { CloseOutlineIcon, LikeThumbIcon, DislikeThumbIcon } from "@vapor-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Review() {
  const [like, setLike] = useState(true);
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="w-[100%] h-[100%] bg-white" onClick={goBack}>
      <div className="flex justify-end p-6">
        <CloseOutlineIcon width={24} height={24} />
      </div>

      <div className="flex flex-col w-[100%] h-[90%] justify-center items-center">
        <Text typography="heading3" className="text-black text-center">
          제주 수목원길 야시장
          <br /> 어떠셨나요?
        </Text>
        <div className="flex gap-4 justify-center mt-15">
          <Button
            className={`w-[135px] h-[85px] border ${like ? "border-[#ff6500] bg-[#fff3eb]" : "border-[#E1E1E8] bg-[#fdfdfe]"}`}
            onClick={() => setLike(true)}
          >
            <LikeThumbIcon width={28} height={27} />
          </Button>
          <Button className="w-[135px] h-[85px]">
            <DislikeThumbIcon width={28} height={27} />
          </Button>
        </div>
      </div>
    </div>
  );
}
