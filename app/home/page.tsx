"use client";

import { Button } from "@vapor-ui/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-between h-full mt-20">
      {/* star image */}
      <div className="flex justify-center items-center">
        <Image src="/star2.png" width={258} height={73} alt="star2" />
      </div>

      {/* buttons */}
      <div className="flex flex-col gap-4 mx-4">
        <Button className="h-35 bg-[#ff6500] text-[20px] font-bold" onClick={() => router.push("/test")}>
          제주의 밤 취향 테스트
        </Button>
        <Button className="h-35 bg-white text-black text-[20px] font-bold" onClick={() => router.push("/spots")}>
          야간 관광 명소 보기
        </Button>
      </div>

      {/* character */}
      <Image src="/char2.png" width={498} height={383} alt="character" />
    </div>
  );
}
