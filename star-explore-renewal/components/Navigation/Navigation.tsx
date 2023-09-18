"use client";

import { useState } from "react";
import Keyword from "./Keyword";
import Search from "./Search";

export default function Navigation() {
  const [isTabToggled, setIsTabToggled] = useState(true);
  const onTabButtonClickHandler = () => {
    setIsTabToggled((prev) => !prev);
  };
  return (
    <nav
      className={
        "bg-space-black/60 border-2 border-star-blue rounded-3xl w-72 h-min p-6 pt-4 pr-1 z-10 " +
        (isTabToggled ? "max-h-full" : " max-h-40")
      }
    >
      <div className="h-10 flex justify-between items-center pr-5">
        <h1 className="pt-2 font-avant text-3xl uppercase font-medium text-star-blue">
          {isTabToggled ? "keyword" : "search"}
        </h1>
        <div className="inline-flex">
          <button
            onClick={onTabButtonClickHandler}
            className={
              "w-6 h-6 mr-2.5 rounded-full border border-star-blue hover:bg-star-blue " +
              (isTabToggled ? "bg-star-blue" : "bg-space-black")
            }
          ></button>
          <button
            onClick={onTabButtonClickHandler}
            className={
              "w-6 h-6 bg-space-black rounded-full border border-star-blue hover:bg-star-blue " +
              (!isTabToggled ? "bg-star-blue" : "bg-space-black")
            }
          ></button>
        </div>
      </div>
      {isTabToggled ? <Keyword /> : <Search />}
    </nav>
  );
}
