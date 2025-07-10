"use client";
import { http } from "@/app/_lib/http";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Postcode from "./_components/Address";
import { Category } from "./_components/Category";
import Header from "./_components/Header";
import OperatingHours from "./_components/OperatingHours";
import PlaceName from "./_components/PlaceName";

const ImageUploader = dynamic(() => import("../upload/_components/ImageUploader"), {
  ssr: false,
});

export default function UploadPage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get("/");
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--vapor-color-black)",
      }}
    >
      <Header />
      <div className="py-13 px-7 flex flex-col gap-6">
        <PlaceName />
        <Postcode />
        <OperatingHours />
        <Category />
        <ImageUploader />
      </div>
    </div>
  );
}
