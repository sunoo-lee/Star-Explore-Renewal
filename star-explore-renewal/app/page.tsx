"use client";

import Navigation from "@/components/Navigation/Navigation";
import Player from "@/components/Player/Player";
import Result from "@/components/Result/Result";
import Space from "@/components/Space/Space";
import Button from "@/components/UI/Button";
import keywordStore from "@/store/keywordStore";

export default function Home() {
  const keywordList = keywordStore((state) => state.keywordList);
  const playerState = keywordStore((state) => state.playerState);

  return (
    <main className="flex flex-row justify-between h-screen min-h-screen overflow-hidden select-none bg-space-black p-14 ">
      <Space />
      <Navigation />
      <div className="z-20 flex gap-2 text-white h-min">
        {keywordList.map((item, i) => (
          <Button key={i} data={item} />
        ))}
      </div>
      <Result />
      {playerState && <Player />}
      {/* <div className="fixed w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/50 top-1/2 left-1/2"></div> */}
    </main>
  );
}
