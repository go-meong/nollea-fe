"use client";

import { Button } from "@vapor-ui/core";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col px-2 justify-between h-full mt-40">
      <div className="flex flex-col gap-8">
        <Button className="h-35 bg-[#ff6500] text-[20px] font-bold" onClick={() => router.push("/test")}>
          제주의 밤 취향 테스트
        </Button>
        <Button className="h-35 bg-white text-black text-[20px] font-bold" onClick={() => router.push("/spots")}>
          야간 관광 명소 보기
        </Button>
      </div>
      <div>h</div>
    </div>
  );
}
