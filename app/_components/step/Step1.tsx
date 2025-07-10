import { Button, Text, RadioGroup } from "@vapor-ui/core";
import CheckButton from "./CheckButton";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IStep1 {
  goNext: () => void;
}

export default function Step1({ goNext }: IStep1) {
  const router = useRouter();
  const [checked, setChecked] = useState(-1);

  const handleClick = (index: number) => {
    setChecked(index);
  };

  const itemArray = ["혼자", "친구", "연인", "가족", "동료", "기타"];

  return (
    <div className="h-screen flex flex-col pb-40 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <Image onClick={() => router.back()} className="hover:cursor-pointer" src="/back-icon.png" width={30} height={30} alt="back" />

        {/* 상단 텍스트 */}
        <div className="mt-4 mb-14">
          <Text typography="heading3" foreground="accent">
            누구와 함께 <br />
            제주도에 오셨나요?
          </Text>
        </div>

        <RadioGroup.Root name="with">
          <div className="flex flex-wrap gap-2 justify-center">
            {itemArray.map((item, index) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton text={item} onClick={handleClick} checked={checked === index} index={index} />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
      </div>

      <Button className="bg-[#ff6500] h-12" stretch onClick={goNext} disabled={checked === -1}>
        다음
      </Button>
    </div>
  );
}
