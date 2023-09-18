"use client";

import keywordStore from "@/store/keywordStore";
import Image from "next/image";
import { useState } from "react";
import exit from "../../asset/player_btn_off.svg";
import open from "../../asset/player_btn_on.svg";
import Button from "../UI/Button";

export default function Player() {
  const currentSong = keywordStore((state) => state.currentSong);
  const [isToggled, setisToggled] = useState(false);

  const onToggleButtonHandler = () => {
    setisToggled((prev) => !prev);
  };

  const toggleFalseClass =
    "w-auto h-60 duration-100 flex items-center justify-between p-8 absolute border-2 border-star-blue rounded-3xl bottom-14 left-1/2 -translate-x-1/2 bg-space-black/60";
  const toggleTrueClass =
    "w-[740px] h-auto duration-300 flex items-center justify-between p-1.5 px-4 absolute border-2 border-star-blue rounded-3xl bottom-14 left-1/2 -translate-x-1/2 bg-space-black/60";

  return (
    <div className={isToggled ? toggleTrueClass : toggleFalseClass}>
      {!isToggled && (
        <div className="overflow-hidden inline-flex justify-center items-center mr-6 w-80 h-44 border-2 border-star-blue rounded-2xl bg-white">
          <iframe
            width="320"
            height="180"
            src={`https://www.youtube.com/embed/${currentSong.embedcode}`}
            title="YouTube video player"
          ></iframe>
        </div>
      )}
      <div className="h-full font-noto flex flex-col justify-between text-center text-star-blue">
        <div className="flex flex-col justify-between h-full">
          <h1
            className={
              "max-w-[330px] break-words " +
              (currentSong.song_title.length > 17 ? " text-lg" : "text-2xl")
            }
          >
            {currentSong.song_title}
          </h1>
          {!isToggled && (
            <div className="text-sm mb-3">
              <div>
                <span>{currentSong.album_title} </span>
              </div>
              <span>{currentSong.release_date} | </span>
              <span>♥ {currentSong.recommend}명</span>
            </div>
          )}
        </div>
        {!isToggled && (
          <div>
            <ul className="grid grid-cols-3 gap-2">
              {currentSong.keywords.map((item, i) =>
                item ? (
                  <Button key={i} data={item} />
                ) : (
                  <Button key={i} data={"-"} />
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={onToggleButtonHandler}
        className={
          "w-6 h-6 bg-space-black border-2 border-star-blue rounded-full" +
          (isToggled ? " flex justify-between" : " absolute top-4 right-4 ")
        }
      >
        <Image src={isToggled ? open : exit} alt="플레이어 최소화 버튼" />
      </button>
    </div>
  );
}
