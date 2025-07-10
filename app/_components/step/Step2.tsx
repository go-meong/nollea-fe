import { TVehicle, useSelectStore } from "@/app/_store/useSelectStore";
import { Button, IconButton, RadioGroup, Text } from "@vapor-ui/core";
import { BackPageOutlineIcon } from "@vapor-ui/icons";
import CheckButton from "./CheckButton";

interface IStep2 {
  goBack: () => void;
  goNext: () => void;
}

export default function Step2({ goBack, goNext }: IStep2) {
  const { vehicle, setVehicle } = useSelectStore();

  const handleClick = (item: string) => {
    setVehicle(item as TVehicle);
  };

  const itemArray = ["도보나 대중교통 이용", "차량 이용 (렌트카, 자가용 등)"];

  return (
    <div className="flex flex-col flex-1 items-center justify-between">
      <div>
        {/* 뒤로 가기 */}
        <IconButton
          onClick={() => goBack()}
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
            어떤 방식으로
            <br />
            여행 중이신가요?
          </Text>
        </div>

        <RadioGroup.Root name="vehicle">
          <div className="grid grid-cols-2 gap-3">
            {itemArray.map((item) => (
              <RadioGroup.Item value={item} key={item}>
                <CheckButton text={item} onClick={handleClick} checked={item === vehicle} />
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
      </div>

      <Button className="bg-[#ff6500] mb-[113px] mt-[62px]" size="xl" stretch onClick={goNext} disabled={!vehicle}>
        다음
      </Button>
    </div>
  );
}
