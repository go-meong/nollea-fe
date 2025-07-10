"use client";

import { Button, Text } from "@vapor-ui/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center">
      {/* 상단 텍스트 */}
      <div className="mt-[128px] flex-1">
        <Text typography="body2" style={{ color: "var(--vapor-color-white)" }}>
          제주도에서 즐기는 새로운 야간 문화
        </Text>
        <Image className="mt-4" src="/landing-title.png" width={203} height={56} alt="landing-title" />
      </div>

      {/* 버튼 */}
      <Button className="w-80 h-12 bg-[#FF6500] mb-[113px]" onClick={() => router.push("/home")}>
        <Text foreground="accent" typography="body1">
          같이 밤보고멍, 시작해볼까요?
        </Text>
      </Button>
    </div>
  );
}
