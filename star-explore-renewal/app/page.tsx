"use client";

import Navigation from "@/components/Navigation/Navigation";
import Result from "@/components/Result/Result";
import Space from "@/components/Space/Space";

import song_graphic from "../asset/song_graphic.json";
import song_infomation from "../asset/song_infomation.json";
import song_keywords from "../asset/song_keywords.json";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(song_keywords);
  }, []);
  return (
    <main className="bg-space-black/50 h-screen p-14 flex min-h-screen flex-row justify-between  ">
      <Space />
      <Navigation />
      <Result />
    </main>
  );
}
