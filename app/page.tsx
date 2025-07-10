import StepPage from "./components/StepPage";
import { pretendard } from "./font";

export default function Home() {
  return (
    <div className={`flex h-screen flex-col items-center justify-center bg-black px-4 ${pretendard.variable}`}>
      <StepPage />
    </div>
  );
}
