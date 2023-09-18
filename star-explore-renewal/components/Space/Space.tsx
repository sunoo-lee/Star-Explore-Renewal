"use client";

import Image from "next/image";
import song_graphic from "../../asset/song_graphic.json";
import song_infomation from "../../asset/song_infomation.json";
import song_keywords from "../../asset/song_keywords.json";
import taurus from "../../asset/taurus.png";
import Star from "../Star/Star";

export default function Space() {
  return (
    <div className="absolute top-0 left-0 w-[2000px] h-[2000px] -translate-y-1/4 bg-space-black z-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={taurus} alt="taurus image" />
      </div>
      <div className="relative w-full h-full">
        {song_graphic.map((item, i) => (
          <Star
            key={i}
            keywords={song_keywords[i]}
            info={song_infomation[i]}
            songData={item}
          />
        ))}
      </div>
    </div>
  );
}
