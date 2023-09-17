"use client";

import { useEffect } from "react";
import Star from "../Star/Star";
import song_graphic from "../../asset/song_graphic.json";

export default function Space() {
  return (
    <div className="absolute top-0 left-0 w-[2000px] h-[2000px] bg-space-black/80 z-0">
      <div className="relative w-full h-full">
        {song_graphic.map((item, i) => (
          <Star key={i} songData={item} />
        ))}
      </div>
    </div>
  );
}
