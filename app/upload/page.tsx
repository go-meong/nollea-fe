"use client";
import { http } from "@/app/_lib/http";
import { Button } from "@vapor-ui/core";
import { useEffect } from "react";
import Postcode from "./_components/Address";
import { Category } from "./_components/Category";
import Description from "./_components/Description";
import Header from "./_components/Header";
import ImageUploader from "./_components/ImageUploader";
import OperatingHours from "./_components/OperatingHours";
import PlaceName from "./_components/PlaceName";

export default function UploadPage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get("/");
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <div className="flex-1 relative">
      <Header />
      <div className="py-5 px-7 flex flex-col gap-6">
        <PlaceName />
        <Postcode />
        <OperatingHours />
        <Category />
        <Description />
        <ImageUploader />
      </div>
      <div className="sticky bottom-0 w-full px-7 py-7">
        <Button
          size="xl"
          style={{
            backgroundColor: "#FF6500",
            color: "var(--vapor-color-white)",
            width: "100%",
          }}
          onClick={() => {
            alert("hi");
          }}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}
