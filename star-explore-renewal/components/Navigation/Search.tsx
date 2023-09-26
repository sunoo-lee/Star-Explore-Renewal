"use client";

import Image from "next/image";
import search from "../../asset/search.svg";
import { useEffect, useState } from "react";
import song_infomation from "../../asset/song_infomation.json";
import SearchItem from "./SearchItem";

const DUMMY_LIST = [
  "오르트구름",
  "살별",
  "물의 여행",
  "반짝, 빛을 내",
  "6년 230일",
  "P.R.R.W.",
  "사건의 지평선",
  "Black hole",
];

export default function Search() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const onInputChangeHandler = (event: any) => {
    const data = event.target.value;
    setValue(data);
  };

  useEffect(() => {
    const resultList = song_infomation.filter(
      (item) =>
        item.song_title.includes(value) || item.pronunciation?.includes(value)
    ) as object[];
    setSearchResult(resultList);
  }, [value]);

  return (
    <div className="relative w-[calc(100%-1rem)] mt-4 text-white md:mt-10 font-noto ">
      <div className="relative z-50 flex items-center justify-between p-1 pl-4 pr-2 overflow-hidden border-2 bg-space-black border-star-blue rounded-2xl ">
        <input
          className="w-full min-w-0 text-xl font-medium outline-none text-star-blue bg-space-black"
          type="text"
          value={value}
          onChange={onInputChangeHandler}
        />
        <div className="w-7">
          <Image src={search} alt="검색창 아이콘" />
        </div>
      </div>
      {searchResult.length < 270 && searchResult.length > 0 && (
        <div className="absolute top-0 z-40 w-full pt-12 pb-4 pr-2 rounded-2xl bg-star-blue/80 break-keep">
          <div className="pl-2 overflow-y-scroll max-h-[30vh]">
            <ul>
              {searchResult.map((item, i) => (
                <SearchItem key={i} title={item.song_title} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
