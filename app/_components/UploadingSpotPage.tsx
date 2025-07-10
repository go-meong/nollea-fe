"use client";
import dynamic from "next/dynamic";
import { MultiSelect } from "./MultiSelect";
import Postcode from "./Postcode";
import TimePicker from "./TimePicker";

const ImageUploader = dynamic(() => import("./ImageUploader"), {
  ssr: false,
});

export default function UploadingSpotPage() {
  return (
    <div>
      <Postcode />
      <TimePicker />
      <MultiSelect />
      <ImageUploader />
    </div>
  );
}
