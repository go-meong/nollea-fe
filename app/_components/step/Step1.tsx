import { Button, IconButton, RadioGroup, Text } from "@vapor-ui/core";
import { BackPageOutlineIcon } from "@vapor-ui/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckButton from "./CheckButton";

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
    <div className="flex flex-col flex-1 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <IconButton
          onClick={() => router.back()}
          size="xl"
          color="primary"
          variant="ghost"
          shape="square"
          aria-label="뒤로가기?"
        >
          <BackPageOutlineIcon color="#525463" width={18} height={18} />
        </IconButton>

        {/* 상단 텍스트 */}
        <div className="mt-4 mb-14">
          <Text typography="heading3" style={{ color: "var(--vapor-color-white)" }}>
            누구와 함께 <br />
            제주도에 오셨나요?
          </Text>
        </div>

        <RadioGroup.Root name="with" className="flex-1">
          <div className="grid grid-cols-2 gap-3">
            {itemArray.map((item, index) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton text={item} onClick={handleClick} checked={checked === index} index={index} />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
      </div>

      <Button
        className="bg-[#ff6500] mb-[113px] mt-[62px]"
        size="xl"
        stretch
        onClick={goNext}
        disabled={checked === -1}
      >
        다음
      </Button>
    </div>
  );
}
