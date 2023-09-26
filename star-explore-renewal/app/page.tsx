"use client";

import Navigation from "@/components/Navigation/Navigation";
import Player from "@/components/Player/Player";
import Result from "@/components/Result/Result";
import Space from "@/components/Space/Space";
import Button from "@/components/UI/Button";
import keywordStore from "@/store/keywordStore";
import mobileBtn from "../asset/mobile_btn.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const keywordList = keywordStore((state) => state.keywordList);
  const playerState = keywordStore((state) => state.playerState);
  const setMobileState = keywordStore((state) => state.setMobileState);
  const isMobile = keywordStore((state) => state.isMobile);
  const [navToggle, setNavToggle] = useState(true);

  const stateCheck = () => {
    console.log("mobile: ", isMobile);
    console.log("navToggle: ", navToggle);
  };

  useEffect(() => {
    const resizingHandler = () => {
      if (window.innerWidth <= 767) {
        setMobileState(true);
        setNavToggle(false);
      } else {
        setMobileState(false);
        setNavToggle(true);
      }
    };

    if (window.innerWidth <= 767) {
      setMobileState(true);
      setNavToggle(false);
    }

    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, [setMobileState]);

  return (
    <main className="flex flex-row justify-between h-screen min-h-screen p-6 overflow-hidden select-none bg-space-black lg:p-14 ">
      <Space />
      <div
        className={
          "relative z-50 transition duration-500 ease-nav-expo" +
          (navToggle ? " transltae-y-0" : " -translate-y-full")
        }
      >
        <Navigation />
      </div>
      <div className="absolute z-20 flex flex-col gap-2 text-white md:flex-row right-6 md:static h-min">
        {keywordList.map((item, i) => (
          <Button key={i} data={item} />
        ))}
      </div>
      <Result />
      {playerState && <Player />}
      {isMobile && (
        <button
          onClick={() => {
            setNavToggle((prev) => !prev);
          }}
          className={
            "fixed z-50 w-12 h-12 p-2 -translate-x-1/2 rounded-full bottom-16 left-1/2 bg-star-blue duration-500" +
            (navToggle ? " rotate-[315deg] " : " rotate-0")
          }
        >
          <Image src={mobileBtn} alt={"모바일 리모컨 버튼"} />
        </button>
      )}
      {/* <div
        onClick={stateCheck}
        className="fixed px-6 py-2 text-white uppercase -translate-x-1/2 -translate-y-1/2 rounded-full bg-star-blue bottom-4 right-4"
      >
        state
      </div> */}
      {/* <div className="fixed w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/50 top-1/2 left-1/2"></div> */}
    </main>
  );
}
