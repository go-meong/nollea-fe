import { Text } from "@vapor-ui/core";

export default function Page() {
  return (
    <div className="w-full flex flex-col justify-between">
      {/* 텍스트 파일 */}
      <div className="w-full font-bold text-[24px] text-white">
        <Text>
          특별한 제주의 밤을
          <br />
          즐기고 싶다면
          <br />
          <br />
          이런 장소 어때요?
        </Text>
      </div>

      {/* list */}
      <div className="mx-[-16px] bg-[#333333] h-[60%] w-[calc(full+16px) rounded-t-3xl">d</div>
    </div>
  );
}
