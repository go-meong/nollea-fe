import { Button, RadioGroup, Text } from "@vapor-ui/core";
import CheckButton from "./CheckButton";
import { useState } from "react";
import Image from "next/image";

interface IStep3 {
  goBack: () => void;
  goNext: () => void;
}

export default function Step3({ goBack, goNext }: IStep3) {
  const [checked, setChecked] = useState(-1);

  const handleClick = (index: number) => {
    setChecked(index);
  };

  const itemArray = ["차분", "로맨틱", "신남", "특별함", "힐링", "기쁨"];

  return (
    <div className="h-screen flex flex-col pb-40 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <Image className="hover:cursor-pointer" src="/back-icon.png" width={30} height={30} alt="back" onClick={goBack} />

        {/* 상단 텍스트 */}
        <div className="mt-4 mb-14">
          <Text typography="heading3" foreground="accent">
            어떤 분위기의 밤을 <br />
            즐기고 싶으신가요?
          </Text>
        </div>

        <RadioGroup.Root name="mood">
          <div className="flex flex-wrap gap-2 justify-center">
            {itemArray.map((item, index) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton text={item} onClick={handleClick} checked={checked === index} index={index} />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
      </div>

      <Button className="bg-[#ff6500] w-80 h-12" onClick={goNext} disabled={checked === -1}>
        다음
      </Button>
    </div>
  );
}
