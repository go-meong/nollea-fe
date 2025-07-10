"use client";

import { Button, Text } from "@vapor-ui/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="mt-[36px] flex flex-col flex-1 relative justify-between">
      <div className="flex flex-col flex-1">
        <Image src="/star3.png" width={282} height={243} alt="done" className="mx-auto" />
        <Text
          typography="heading2"
          style={{ color: "var(--vapor-color-white)" }}
          className="text-center mb-12 mt-[67px] w-full"
        >
          야간 관광지 등록 완료!
        </Text>

        <Image src="/char3.png" width={282} height={243} alt="loading" className="ml-auto" />
      </div>
      <div className="px-4 mt-[164px] mb-[65px] w-full">
        <Button size="xl" className="bg-[#FF6500] w-full" onClick={() => router.push("/home")}>
          돌아가기
        </Button>
      </div>
    </div>
  );
}
