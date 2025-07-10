import { Button } from "@vapor-ui/core";

export default function Home() {
  return (
    <div className="py-40 h-screen flex flex-col items-center justify-between">
      {/* 상단 텍스트 */}
      <div>
        <div className="text-white mb-4">제주도에서 즐기는 새로운 야간 문화</div>
      </div>
      <Button className="w-80 h-12 bg-[#FF6500]" onClick={() => null}>
        같이 밤보고멍, 시작해볼까요?
      </Button>
    </div>
  );
}
