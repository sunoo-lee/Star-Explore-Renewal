"use client";

import { useState } from "react";
import Keyword from "./Keyword";
import Search from "./Search";
import keywordStore from "@/store/keywordStore";

export default function Navigation() {
  const isSearchMode = keywordStore((state) => state.isSearchMode);
  const setSearchMode = keywordStore((state) => state.setSearchMode);
  const onTabButtonClickHandler = () => {
    setSearchMode();
  };
  return (
    <nav
      className={
        "bg-space-black/60 border-2 border-star-blue rounded-3xl w-72 h-min p-6 pt-4 pr-1 z-10 " +
        (isSearchMode ? " max-h-40" : "max-h-full")
      }
    >
      <div className="flex items-center justify-between h-10 pr-5">
        <h1 className="pt-2 text-3xl font-medium uppercase font-avant text-star-blue">
          {isSearchMode ? "search" : "keyword"}
        </h1>
        <div className="inline-flex">
          <button
            onClick={onTabButtonClickHandler}
            className={
              "w-6 h-6 mr-2.5 rounded-full border border-star-blue hover:bg-star-blue " +
              (isSearchMode ? "bg-space-black" : "bg-star-blue")
            }
          ></button>
          <button
            onClick={onTabButtonClickHandler}
            className={
              "w-6 h-6 bg-space-black rounded-full border border-star-blue hover:bg-star-blue " +
              (isSearchMode ? "bg-star-blue" : "bg-space-black")
            }
          ></button>
        </div>
      </div>
      {!isSearchMode ? <Keyword /> : <Search />}
    </nav>
  );
}
