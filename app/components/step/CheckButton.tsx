import { Button } from "@vapor-ui/core";

interface ICheckButton {
  text: string;
  onClick: (index: number) => void;
  checked?: boolean;
  index: number;
}

export default function CheckButton({
  text,
  onClick,
  checked,
  index,
}: ICheckButton) {
  return (
    <Button
      className={`${checked ? "font-extrabold" : ""} h-30 bg-[#131313] w-44 border text-[18px] text-[#${checked ? "ff6500" : "6C6E7E"}] hover:text-[#ff6500]`}
      onClick={() => onClick(index)}
    >
      {text}
    </Button>
  );
}
