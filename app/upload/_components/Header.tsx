import { IconButton, Text } from "@vapor-ui/core";
import { BackPageOutlineIcon } from "@vapor-ui/icons";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 justify-between sticky px-6">
      <IconButton
        onClick={() => router.back()}
        size="xl"
        color="primary"
        variant="ghost"
        shape="square"
        aria-label="뒤로 가기"
      >
        <BackPageOutlineIcon color="#525463" />
      </IconButton>
      <Text
        typography="heading3"
        style={{
          color: "var(--vapor-color-white)",
        }}
      >
        야간 관광지 추천하기
      </Text>
      <div className="w-12" role="presentation" />
    </div>
  );
}
