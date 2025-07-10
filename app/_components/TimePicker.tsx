"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function TimePicker() {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="time-picker" className="px-1">
        운영 시간
      </Label>
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
