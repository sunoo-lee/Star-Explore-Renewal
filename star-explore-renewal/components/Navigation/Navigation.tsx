"use client";

import keywordStore from "@/store/keywordStore";
import Keyword from "./Keyword";
import Search from "./Search";
import { useEffect, useState } from "react";

export default function Navigation() {
  const isSearchMode = keywordStore((state) => state.isSearchMode);
  const setSearchMode = keywordStore((state) => state.setSearchMode);
  const isMobile = keywordStore((state) => state.isMobile);
  const onTabButtonClickHandler = () => {
    setSearchMode();
  };

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <nav
      className={
        "bg-space-black/60 border-2  border-star-blue rounded-3xl w-full h-4/5 md:w-72 md:h-min p-6 pt-4 pr-1 z-20 " +
        (isMobile ? "max-h-full" : isSearchMode ? " max-h-40" : "max-h-full")
      }
    >
      {!isMobile && (
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
      )}
      {isMobile ? (
        <>
          <h1 className="pt-2 text-3xl font-medium uppercase font-avant text-star-blue">
            search
          </h1>
          <Search />
          <h1 className="pt-2 mt-16 text-3xl font-medium uppercase font-avant text-star-blue">
            keyword
          </h1>
          <Keyword />
        </>
      ) : !isSearchMode ? (
        <Keyword />
      ) : (
        <Search />
      )}
    </nav>
  );
}
