"use client";

import { Button, Text } from "@vapor-ui/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-25">
      {/* 상단 텍스트 */}
      <div>
        <Text foreground="accent" typography="body2">
          제주도에서 즐기는 새로운 야간 문화
        </Text>
        <Image className="mt-4" src="/landing-title.png" width={203} height={56} alt="landing-title" />
      </div>

      {/* 이미지 */}
      <div className="w-screen max-w-[600px]">
        <Image className="relative" src="/star1.png" width={282} height={244} alt="star" />
        <Image className="absolute" src="/char1.png" width={100} height={204} alt="char" />
      </div>

      {/* 버튼 */}
      <Button className="w-80 h-12 bg-[#FF6500]" onClick={() => router.push("/home")}>
        <Text foreground="accent" typography="body1">
          같이 밤보고멍, 시작해볼까요?
        </Text>
      </Button>
    </div>
  );
}
