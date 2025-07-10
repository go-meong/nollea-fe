import { Button } from "@vapor-ui/core";
import clsx from "clsx";

interface ICheckButton {
  text: string;
  onClick: (index: number) => void;
  checked?: boolean;
  index: number;
}

export default function CheckButton({ text, onClick, checked, index }: ICheckButton) {
  return (
    <Button
      className={clsx(
        "h-30 w-44 border text-[18px] hover:text-[#ff6500] hover:border-[#ff6500]",
        checked ? "font-extrabold bg-[#140700] text-[#ff6500]" : "bg-[#131313] border-[#6C6E7E]"
      )}
      onClick={() => onClick(index)}
    >
      {text}
    </Button>
  );
}
