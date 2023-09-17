import Image from "next/image";
import reset from "../../asset/reset.svg";
import Button from "../UI/Button";
import Keyword from "./KeywordValidator";
import KeywordList from "./KeywordList";

const keyword_list_1 = [
  { data: "따뜻한", category: "emotion1" },
  { data: "시니컬한", category: "emotion1" },
  { data: "시원한", category: "emotion1" },
  { data: "그리운", category: "emotion2" },
  { data: "나른한", category: "emotion2" },
  { data: "벅차는", category: "emotion2" },
  { data: "설레는", category: "emotion2" },
  { data: "아련한", category: "emotion2" },
  { data: "지겨운", category: "emotion2" },
  { data: "흥겨운", category: "emotion2" },
  { data: "간절한", category: "emotion3" },
  { data: "담담한", category: "emotion3" },
  { data: "신비로운", category: "emotion3" },
  { data: "애절한", category: "emotion3" },
  { data: "청량한", category: "emotion3" },
];
const keyword_list_2 = [
  { data: "꿈", category: "theme1" },
  { data: "사랑", category: "theme1" },
  { data: "연주곡", category: "theme1" },
  { data: "이별", category: "theme1" },
  { data: "일상", category: "theme1" },
  { data: "짝사랑", category: "theme1" },
  { data: "비", category: "theme2" },
  { data: "성장", category: "theme2" },
  { data: "우주", category: "theme2" },
  { data: "추억", category: "theme2" },
  { data: "윤하", category: "theme3" },
  { data: "응원", category: "theme3" },
];
const keyword_list_3 = [
  { data: "댄스", category: "genre" },
  { data: "J-POP", category: "genre" },
  { data: "OST", category: "genre" },
  { data: "POP", category: "genre" },
  { data: "RnB", category: "genre" },
  { data: "랩/힙합", category: "genre" },
  { data: "Rock", category: "genre" },
  { data: "발라드", category: "genre" },
];

export default function Navigation() {
  return (
    <nav className=" bg-space-black/60 border-2 border-star-blue rounded-3xl w-72 h-full p-4 pr-2 z-10">
      <div className="h-10 flex justify-between items-start pr-2">
        <h1 className="font-avant text-3xl uppercase font-medium text-star-blue">
          keyword
        </h1>
        <div className="inline-flex">
          <button className="w-6 h-6 mr-2 bg-space-black/50 rounded-full border border-star-blue hover:bg-star-blue"></button>
          <button className="w-6 h-6 bg-space-black/50 rounded-full border border-star-blue hover:bg-star-blue"></button>
        </div>
      </div>
      <div className="p-2 h-[calc(100%-80px)]">
        <div className="relative h-10 pb-2 text-right">
          <button className="absolute bottom-2 right-0 w-6 h-6">
            <Image src={reset} alt="refresh button" />
          </button>
        </div>
        <div className="h-full overflow-y-scroll overflow-x-hidden pr-2">
          <div className="">
            <KeywordList category="emotion" keywordList={keyword_list_1} />
            <KeywordList category="theme" keywordList={keyword_list_2} />
            <KeywordList category="genre" keywordList={keyword_list_3} />
          </div>
        </div>
      </div>
    </nav>
  );
}
