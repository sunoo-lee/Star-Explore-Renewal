"use client";

import keywordStore from "@/store/keywordStore";
import { useEffect, useState } from "react";
import song_keywords from "../../asset/song_keywords.json";
import ResultItem from "./ResultItem";

export default function Result() {
  const keywordList = keywordStore((state) => state.keywordList);
  const [resultList, setResultList] = useState(song_keywords);

  useEffect(() => {
    const resultSong = song_keywords.filter((item) => {
      const values = Object.values(item);
      for (let currentKeyword of keywordList) {
        if (!values.includes(currentKeyword)) {
          return;
        }
      }
      return item.song_title;
    });
    setResultList(resultSong);
  }, [keywordList]);

  return (
    <div className="absolute z-10 min-h-0 max-w-[50vw] md:relative font-avant w-52 lg:w-64 h-min bg-star-blue/60 rounded-3xl">
      <div
        className={
          (resultList.length === 270
            ? "text-star-blue bg-space-black "
            : "text-space-black bg-star-blue ") +
          "text-center pt-2 text-2xl font-medium border-2 border-star-blue rounded-full uppercase"
        }
      >
        <span>result: </span>
        <span>{resultList.length}</span>
      </div>
      <div
        className={
          (resultList.length === 270 ? "h-0" : "overflow-hidden") +
          " pl-8 pr-4 duration-300"
        }
      >
        {resultList.length < 270 && resultList.length > 0 && (
          <div className="my-4 overflow-x-hidden overflow-y-scroll lg:max-h-[30vh] max-h-60">
            <ul className="mr-4 break-keep">
              {resultList.map((item, i) => (
                <ResultItem key={i} title={item.song_title} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
