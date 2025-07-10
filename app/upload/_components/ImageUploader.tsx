"use client";

import { IconButton, Text } from "@vapor-ui/core";
import { PlusOutlineIcon } from "@vapor-ui/icons";
import { useRef } from "react";

export default function ImageUploader({
  image: selectedImage,
  setImage: setSelectedImage,
  setFile,
}: {
  image: string | null;
  setImage: (image: string | null) => void;
  file: File | null;
  setFile: (file: File | null) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <Text
        typography="body2"
        style={{
          color: "var(--vapor-color-white)",
        }}
      >
        사진 첨부
      </Text>
      {/* 업로드 버튼 */}
      <div className="flex gap-2">
        <div className="relative">
          <IconButton
            aria-label="이미지 추가"
            size="xl"
            color="primary"
            variant="ghost"
            shape="square"
            onClick={handleButtonClick}
            style={{
              position: "relative",
              overflow: "hidden",

              backgroundColor: "var(--vapor-color-gray-900)",
            }}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="선택된 이미지" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <PlusOutlineIcon
                style={{
                  color: "var(--vapor-color-white)",
                }}
              />
            )}
          </IconButton>
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </div>
    </div>
  );
}
