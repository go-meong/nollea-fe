import { Button, RadioGroup, Text } from "@vapor-ui/core";
import CheckButton from "./CheckButton";
import { useState } from "react";
import Image from "next/image";

interface IStep4 {
  goBack: () => void;
  goNext: () => void;
}

export default function Step4({ goBack, goNext }: IStep4) {
  const [checked, setChecked] = useState(-1);

  const handleClick = (index: number) => {
    setChecked(index);
  };

  const itemArray = ["산책", "공연", "맛집", "체험"];

  return (
    <div className="h-screen flex flex-col pb-40 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <Image className="hover:cursor-pointer" src="/back-icon.png" width={30} height={30} alt="back" onClick={goBack} />

        {/* 상단 텍스트 */}
        <div className="mt-4 mb-14">
          <Text typography="heading3" foreground="accent">
            어떤 활동을 <br />
            하고 싶으신가요?
          </Text>
        </div>

        <RadioGroup.Root name="activity">
          <div className="flex flex-wrap gap-2 justify-center">
            {itemArray.map((item, index) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton key={item} text={item} onClick={handleClick} checked={checked === index} index={index} />
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
