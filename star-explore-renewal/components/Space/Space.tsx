"use client";

import Image from "next/image";
import song_graphic from "../../asset/song_graphic.json";
import song_infomation from "../../asset/song_infomation.json";
import song_keywords from "../../asset/song_keywords.json";
import taurus from "../../asset/taurus.png";
import Star from "../Star/Star";
import keywordStore from "@/store/keywordStore";
import { useEffect, useState } from "react";

export default function Space() {
  const spacePosition = keywordStore((state) => state.spacePosition);
  const resetSpacePosition = keywordStore((state) => state.resetSpacePosition);
  const keywordList = keywordStore((state) => state.keywordList);
  const isSearchMode = keywordStore((state) => state.isSearchMode);
  const [spaceOffset, setSpaceOffset] = useState({});

  useEffect(() => {
    if (keywordList.length !== 0) return;
    if (isSearchMode) return;
    resetSpacePosition();
  }, [keywordList.length, resetSpacePosition, isSearchMode]);

  useEffect(() => {
    const spaceReposition = () => {
      const w_width = document.body.offsetWidth;
      const w_height = document.body.offsetHeight;
      const space_x = (2500 - w_width) / 2 - 250;
      const space_y = (2000 - w_height) / 2;
      let offset: object = {};
      if (space_x < 0 && space_y < 0) {
        offset = {
          transform: `translate(${space_x * -1}px, ${space_y * -1}px) `,
        };
      } else if (space_x >= 0 && space_y < 0) {
        offset = {
          transform: `translate(${space_x * -1}px, ${space_y * -1}px) `,
        };
      } else if (space_x < 0 && space_y >= 0) {
        offset = {
          transform: `translate(${space_x * -1}px, ${space_y * -1}px) `,
        };
      } else if (space_x >= 0 && space_y >= 0) {
        offset = {
          transform: `translate(-${space_x}px, -${space_y}px) `,
        };
      }
      setSpaceOffset(offset);
    };
    spaceReposition();
  }, [keywordList.length]);

  return (
    <div
      style={spaceOffset}
      className="absolute top-0 left-0 w-[2000px] h-[2000px] duration-300 "
    >
      <div
        style={spacePosition}
        className={
          "relative top-0 left-0 w-[2000px] h-[2000px] bg-space-black z-0 duration-500  "
        }
      >
        <div
          className={
            (keywordList.length !== 0 ? "opacity-0" : "opacity-100") +
            " absolute top-0 left-0 w-full h-full duration-300"
          }
        >
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
    </div>
  );
}
