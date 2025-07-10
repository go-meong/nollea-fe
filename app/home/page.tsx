"use client";

import { Nav } from "@vapor-ui/core";
import Image from "next/image";
export default function Page() {
  return (
    <div className="w-full flex flex-col justify-between h-full mt-20">
      {/* star image */}
      <div className="flex justify-center items-center">
        <Image src="/star2.png" width={258} height={73} alt="star2" />
      </div>

      {/* nav */}
      <Nav.Root size="md" shape="fill" aria-label="Navigation menu">
        <Nav.List className="flex flex-col gap-4 mx-8">
          <Nav.Item>
            <Nav.Link href="/test" className="h-12 bg-[#ff6500] text-[20px] font-bold text-white">
              제주의 밤 취향 테스트
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/spots" className="h-12 bg-white text-black text-[20px] font-bold">
              야간 관광 명소 보기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav.List>
      </Nav.Root>

      {/* character */}
      <Image src="/char2.png" width={498} height={383} alt="character" className="w-full" />
    </div>
  );
}
