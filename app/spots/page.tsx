"use client";

import CommonCard from "../_components/common/CommonCard";
import Header from "./_components/Header";

export default function Page() {
  return (
    <div className="flex-1 relative">
      <Header />
      <div className="flex-1 flex flex-col mt-14">
        <CommonCard
          id="1"
          imgUrl=""
          badges={[]}
          title="제주 야간 관광 리스트"
          location="제주시"
          userLat={33.486833}
          userLon={126.514822}
          lat={33.486833}
          lon={126.514822}
          time={["18:00", "20:00"]}
        />
      </div>
    </div>
  );
}
