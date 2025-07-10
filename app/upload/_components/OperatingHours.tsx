"use client";
import { Input } from "@/components/ui/input";
import { Text } from "@vapor-ui/core";

export default function OperatingHours() {
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
            defaultValue="10:30"
            className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none h-8"
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
            defaultValue="10:30:00"
            className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none h-8"
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
