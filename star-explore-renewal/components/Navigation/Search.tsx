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

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="font-noto text-white bg-star-blue mr-5 mt-10 rounded-2xl overflow-hidden ">
      <div className="bg-space-black p-1 pl-4 pr-2 flex justify-between items-center border-2 border-star-blue rounded-2xl overflow-hidden ">
        <input
          className="min-w-0 w-full text-xl font-medium text-star-blue bg-space-black  outline-none"
          type="text"
          value={value}
          onChange={onInputChangeHandler}
        />
        <div className="w-7">
          <Image src={search} alt="검색창 아이콘" />
        </div>
      </div>
      {searchResult.length < 270 && searchResult.length > 0 && (
        <div className="max-h-96 my-2 h-min overflow-y-scroll">
          <ul>
            {searchResult.map((item, i) => (
              <SearchItem key={i} title={item.song_title} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
