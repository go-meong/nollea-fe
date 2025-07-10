"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ILoading {
  goNext: () => void;
}

export default function Loading({ goNext }: ILoading) {
  useEffect(() => {
    const timer = setTimeout(() => {
      goNext();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className="font-bold text-[28px] text-center text-white mb-20">
        제주에 어떤 밤이
        <br />
        기다리고 있을까요?
      </div>

      <Image src="/loading.png" width={282} height={243} alt="loading" />
    </div>
  );
}
