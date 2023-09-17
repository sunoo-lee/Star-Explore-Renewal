"use client";

import Image from "next/image";
import starImg from "../../asset/img_0.svg";

export default function Star({ songData }: any) {
  const style = { top: `${songData.y}px`, left: `${songData.x}px` };

  return (
    <div style={style} className="absolute w-3 h-3 cursor-pointer">
      <Image src={starImg} alt="0 star image" />
    </div>
  );
}
