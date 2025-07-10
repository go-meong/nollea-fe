import { Button } from "@vapor-ui/core";

interface ICheckButton {
  text: string;
  onClick: (index: number) => void;
  checked?: boolean;
  index: number;
}

export default function CheckButton({ text, onClick, checked, index }: ICheckButton) {
  return (
    <Button
      className={`h-30 w-44 ${checked ? "font-extrabold" : ""} bg-[${checked ? "#140700" : "#131313"}] border text-[18px] text-[${
        checked ? "#ff6500" : "#6C6E7E"
      }] hover:text-[#ff6500] bg-[#140700]`}
      onClick={() => onClick(index)}
    >
      {text}
    </Button>
  );
}
