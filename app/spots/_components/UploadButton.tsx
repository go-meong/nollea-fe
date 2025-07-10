import { IconButton } from "@vapor-ui/core";
import { PlusOutlineIcon } from "@vapor-ui/icons";
import { useRouter } from "next/navigation";
export default function UploadButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/upload");
  };

  return (
    <div className="fixed bottom-[12px] right-[12px]">
      <IconButton
        aria-label="제주 명소 등록"
        size="lg"
        className="rounded-full bg-[#FF6500] text-white shadow-lg w-[60px] h-[60px]"
        onClick={handleClick}
      >
        <PlusOutlineIcon width={24} height={24} />
      </IconButton>
    </div>
  );
}
