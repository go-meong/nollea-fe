"use client";

import { Button, Text } from "@vapor-ui/core";
import { type Address, useDaumPostcodePopup } from "react-daum-postcode";

const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

export default function Address({
  address,
  setAddress,
  postcode,
  setPostcode,
}: {
  address: string;
  setAddress: (address: string) => void;
  postcode: string;
  setPostcode: (postcode: string) => void;
}) {
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setPostcode(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className="flex flex-col gap-2">
      <Text
        typography="body2"
        style={{
          color: "var(--vapor-color-white)",
        }}
      >
        주소
      </Text>
      <Button
        size="md"
        onClick={handleClick}
        className="w-full h-8 text-left flex justify-start px-3"
        style={{
          backgroundColor: "var(--vapor-color-gray-900)",
          borderColor: "var(--vapor-color-gray-900)",
          color: "var(--vapor-color-white)",
        }}
        aria-label="주소 선택"
      >
        <Text typography="body2" className="line-clamp-1">
          {address}
        </Text>
        {postcode && <Text typography="body2"> ({postcode})</Text>}
      </Button>
    </div>
  );
}
