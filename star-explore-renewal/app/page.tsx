"use client";

import Navigation from "@/components/Navigation/Navigation";
import Player from "@/components/Player/Player";
import Result from "@/components/Result/Result";
import Space from "@/components/Space/Space";
import Button from "@/components/UI/Button";
import keywordStore from "@/store/keywordStore";
import { useEffect } from "react";

import song_graphic from "../asset/song_graphic.json";
import song_infomation from "../asset/song_infomation.json";
import song_keywords from "../asset/song_keywords.json";

export default function Home() {
  const keywordList = keywordStore((state) => state.keywordList);
  useEffect(() => {
    // console.log(song_graphic);
    // console.log(song_infomation);
    // console.log(song_keywords);
  }, []);
  return (
    <main className="select-none bg-space-black/30 h-screen p-14 flex min-h-screen flex-row justify-between  ">
      <Space />
      <Navigation />
      <div className="h-min z-20 text-white flex gap-2">
        {keywordList.map((item, i) => (
          <Button key={i} data={item} />
        ))}
      </div>
      <Result />
      <Player />
    </main>
  );
}
