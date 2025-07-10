"use client";
import { Input } from "@/components/ui/input";
export default function TimePicker() {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="time-picker" className="px-1">
        Time
      </label>
      <Input
        type="time"
        id="time-picker"
        step="1"
        defaultValue="10:30:00"
        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
      />
    </div>
  );
}
