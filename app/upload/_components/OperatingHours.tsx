"use client";
import { Input } from "@/components/ui/input";
import { Text } from "@vapor-ui/core";

export default function OperatingHours({
  operatingHours,
  setOperatingHours,
}: {
  operatingHours: [string, string];
  setOperatingHours: (operatingHours: [string, string]) => void;
}) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-3">
        <Text
          asChild
          typography="body2"
          style={{
            color: "var(--vapor-color-white)",
          }}
        >
          <label htmlFor="time-picker"> 운영 시간</label>
        </Text>
        <div className="flex gap-4 items-center">
          <Input
            type="time"
            id="time-picker"
            step="60000"
            value={operatingHours[0]}
            onChange={(e) => setOperatingHours([e.target.value, operatingHours[1]])}
            className="h-8"
            style={{
              backgroundColor: "var(--vapor-color-gray-900)",
              borderColor: "var(--vapor-color-gray-900)",
              color: "var(--vapor-color-white)",
              fontSize: "var(--vapor-typography-fontSize-075)",
            }}
          />
          <Text
            typography="heading3"
            style={{
              color: "var(--vapor-color-white)",
            }}
          >
            ~
          </Text>
          <Input
            type="time"
            id="time-picker"
            step="60000"
            value={operatingHours[1]}
            onChange={(e) => setOperatingHours([operatingHours[0], e.target.value])}
            className="h-8"
            style={{
              backgroundColor: "var(--vapor-color-gray-900)",
              borderColor: "var(--vapor-color-gray-900)",
              color: "var(--vapor-color-white)",
              fontSize: "var(--vapor-typography-fontSize-075)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
