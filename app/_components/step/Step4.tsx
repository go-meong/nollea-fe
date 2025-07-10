import { Button, IconButton, RadioGroup, Text } from "@vapor-ui/core";
import { BackPageOutlineIcon } from "@vapor-ui/icons";
import CheckButton from "./CheckButton";
import { TActivity, useSelectStore } from "@/store/useSelectStore";

interface IStep4 {
  goBack: () => void;
  goNext: () => void;
}

export default function Step4({ goBack, goNext }: IStep4) {
  const { activity, setActivity } = useSelectStore();

  const handleClick = (item: string) => {
    setActivity(item as TActivity);
  };

  const itemArray = ["산책", "공연", "맛집", "체험"];

  return (
    <div className="flex flex-col flex-1 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <IconButton onClick={() => goBack()} size="xl" color="primary" variant="ghost" shape="square" aria-label="뒤로가기?">
          <BackPageOutlineIcon color="#525463" width={18} height={18} />
        </IconButton>

        {/* 상단 텍스트 */}
        <div className="mt-4 mb-14">
          <Text typography="heading3" style={{ color: "var(--vapor-color-white)" }}>
            어떤 활동을 <br />
            하고 싶으신가요?
          </Text>
        </div>

        <RadioGroup.Root name="activity">
          <div className="grid grid-cols-2 gap-3">
            {itemArray.map((item) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton key={item} text={item} onClick={handleClick} checked={item === activity} />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
      </div>

      <Button className="bg-[#ff6500] mb-[113px] mt-[62px]" size="xl" stretch onClick={goNext} disabled={!activity}>
        다음
      </Button>
    </div>
  );
}
