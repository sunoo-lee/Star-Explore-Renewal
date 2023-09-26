import Image from "next/image";
import KeywordList from "./KeywordList";
import reset from "../../asset/reset.svg";
import keywordStore from "@/store/keywordStore";

export default function Keyword() {
  const resetKeyword = keywordStore((state) => state.resetKeyword);

  return (
    <div className="relative h-full p-2 md:static">
      <div className="absolute h-8 text-right -top-8 right-10 md:top-0 md:right-0 md:static">
        <button
          onClick={resetKeyword}
          className="w-6 h-6 md:relative md:bottom-0 md:right-6"
        >
          <Image src={reset} alt="refresh button" />
        </button>
      </div>
      <div className="max-h-[calc(100%-200px)] md:max-h-[calc(100vh-240px)] pr-5 overflow-x-hidden overflow-y-scroll">
        <div>
          <KeywordList category="emotion" keywordList={keyword_list_1} />
          <KeywordList category="theme" keywordList={keyword_list_2} />
          <KeywordList category="genre" keywordList={keyword_list_3} />
        </div>
      </div>
    </div>
  );
}

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
