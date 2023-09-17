"use client";

import Image from "next/image";
import img_0 from "../../asset/img_0.svg";
import img_1 from "../../asset/img_1.svg";
import img_2 from "../../asset/img_2.svg";
import img_3 from "../../asset/img_3.svg";
import img_4 from "../../asset/img_4.svg";
import img_5 from "../../asset/img_5.svg";
import img_6 from "../../asset/img_6.svg";
import img_black from "../../asset/img_black.svg";
import img_cloud from "../../asset/img_cloud.svg";
import img_comet1 from "../../asset/img_comet1.svg";
import img_comet2 from "../../asset/img_comet2.svg";

export default function Star({ keywords, songData }: any) {
  const style = { top: `${songData.y}px`, left: `${songData.x}px` };

  const imgFilter = () => {
    let imgSrc = img_1;
    const size = songData.size;
    if (size === "img_0") imgSrc = img_0;
    else if (size === "img_1") imgSrc = img_1;
    else if (size === "img_2") imgSrc = img_2;
    else if (size === "img_3") imgSrc = img_3;
    else if (size === "img_4") imgSrc = img_4;
    else if (size === "img_5") imgSrc = img_5;
    else if (size === "img_6") imgSrc = img_6;
    else if (size === "img_black") imgSrc = img_black;
    else if (size === "img_cloud") imgSrc = img_cloud;
    else if (size === "img_comet1") imgSrc = img_comet1;
    else if (size === "img_comet2") imgSrc = img_comet2;
    return imgSrc;
  };

  return (
    <div
      style={style}
      className={"absolute w-3 h-3 cursor-pointer " + songData.size}
    >
      <Image src={imgFilter()} alt="0 star image" />
    </div>
  );
}
