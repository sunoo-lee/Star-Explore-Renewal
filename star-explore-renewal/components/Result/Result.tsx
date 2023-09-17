import ResultItem from "./ResultItem";

const DUMMY_RESULT = [
  "오르트구름",
  "살별",
  "물의 여행",
  "반짝, 빛을 내",
  "6년 230일",
  "P.R.R.W",
  "나는 계획이 있다",
  "Truly",
  "별의 조각",
  "하나의 달",
  "사건의 지평선",
  "Black hole",
  "Savior",
  "잘 지내",
];

export default function Result() {
  return (
    <div className="font-avant w-64 min-h-0 h-96 bg-star-blue/60 rounded-3xl z-10">
      <div className="text-center pt-2 text-2xl font-medium border-2 border-star-blue rounded-full text-space-black bg-star-blue  uppercase">
        <span>result: </span>
        <span>000</span>
      </div>
      <div className="h-[calc(100%-50px)] p-6 pl-8 pr-4">
        <div className="h-full overflow-y-scroll overflow-x-hidden ">
          <ul>
            {DUMMY_RESULT.map((item, i) => (
              <ResultItem key={i} title={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
