import { Text } from "@vapor-ui/core";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="mt-40 flex flex-col flex-1 relative">
      <Text typography="heading2" style={{ color: "var(--vapor-color-white)" }} className="text-center mb-12">
        제주에 어떤 밤이
        <br />
        기다리고 있을까요?
      </Text>

      <Image src="/loading.png" width={282} height={243} alt="loading" />
    </div>
  );
}
