import Button from "../UI/Button";
import Keyword from "./KeywordValidator";

export default function KeywordList({ category, keywordList }: any) {
  return (
    <div className="py-2 w-full flex flex-col justify-center border-t border-star-blue">
      <div>
        <span className="font-avant font-thin uppercase text-xl text-star-blue">
          {category}
        </span>
      </div>
      <div className="font-noto mx-auto my-4 grid grid-cols-2 gap-2 font-medium">
        {keywordList.map((item: Keyword, i: number) => (
          <Button key={i}>{item.data}</Button>
        ))}
      </div>
    </div>
  );
}
