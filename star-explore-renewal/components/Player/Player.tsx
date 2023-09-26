"use client";

import keywordStore from "@/store/keywordStore";
import Image from "next/image";
import { useState } from "react";
import exit from "../../asset/player_btn_off.svg";
import open from "../../asset/player_btn_on.svg";
import Button from "../UI/Button";

export default function Player() {
  const currentSong = keywordStore((state) => state.currentSong);
  const isMobile = keywordStore((state) => state.isMobile);
  const isToggled = keywordStore((state) => state.playerToggle);
  const setisToggled = keywordStore((state) => state.setPlayerToggle);

  const setPlayerButtonTrue = () => {
    setisToggled(true);
  };
  const setPlayerButtonFalse = () => {
    setisToggled(false);
  };

  const toggleFalseClass =
    "absolute w-min max-w-[calc(100vw-2rem)] flex flex-col-reverse items-center justify-between duration-100 p-6 left-1/2 bottom-32 md:bottom-16 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 lg:right-14 playerSize:bottom-14 playerSize:flex-row playerSize:w-[740px] playerSize:h-60 playerSize:p-8 playerSize:left-1/2 playerSize:-translate-x-1/2 border-2 border-star-blue rounded-3xl bg-space-black/60 z-40";
  const toggleTrueClass =
    "absolute w-min max-w-[calc(100vw-2rem)] flex flex-col-reverse items-center justify-between duration-100 p-2 px-4 left-1/2 bottom-32 md:bottom-16 -translate-x-1/2 md:w-[370px] md:translate-x-0 md:left-auto md:right-6 lg:right-14 playerSize:bottom-14 md:flex-row playerSize:w-[740px] md:p-2 md:px-4 playerSize:left-1/2 playerSize:-translate-x-1/2 border-2 border-star-blue rounded-3xl bg-space-black/60 z-40";

  return (
    <div className={isToggled ? toggleTrueClass : toggleFalseClass}>
      <div
        className={
          (isToggled ? "hidden " : "") +
          "inline-flex items-center justify-center mt-6 w-full playerSize:mt-0 playerSize:mr-6 overflow-hidden bg-white border-2 md:w-80 md:h-44 border-star-blue rounded-2xl"
        }
      >
        <iframe
          width="320"
          height="180"
          src={`https://www.youtube-nocookie.com/embed/${currentSong.embedcode}`}
          title="YouTube video player"
        ></iframe>
      </div>
      <div className="flex flex-col justify-between h-full text-center font-noto text-star-blue whitespace-nowrap">
        <div className="flex flex-col justify-between h-full">
          {isMobile && isToggled ? (
            <div className="text-xl" onClick={setPlayerButtonFalse}>
              more info?
            </div>
          ) : (
            <h1
              className={
                "max-w-[330px] mb-4 pb-6 break-words font-medium border-b-2 border-star-blue md:border-none md:mb-0 md:pb-0 " +
                (currentSong.song_title.length > 17 ? " text-lg" : "text-2xl")
              }
            >
              {currentSong.song_title}
            </h1>
          )}

          {!isToggled && (
            <div className="mb-4 text-sm playerSize:mb-3">
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
      {isMobile && isToggled ? (
        ""
      ) : (
        <button
          onClick={setPlayerButtonTrue}
          className={
            "w-6 h-6 bg-space-black border-2 border-star-blue rounded-full" +
            (isToggled ? " flex justify-between" : " absolute top-4 right-4 ")
          }
        >
          <Image src={isToggled ? open : exit} alt="플레이어 최소화 버튼" />
        </button>
      )}
    </div>
  );
}
