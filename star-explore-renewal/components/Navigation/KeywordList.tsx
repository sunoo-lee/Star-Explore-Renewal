import Button from "../UI/Button";
import Keyword from "./KeywordValidator";

export default function KeywordList({ category, keywordList }: any) {
  return (
    <div className="flex flex-col justify-center w-full py-2 border-t border-star-blue last:pb-0">
      <div>
        <span className="text-xl font-thin uppercase font-avant text-star-blue">
          {category}
        </span>
      </div>
      <div className="flex flex-wrap justify-center mx-auto my-4 gap-x-1 gap-y-2 md:gap-x-2 md:gap-y-3 md:grid md:grid-cols-2">
        {keywordList.map((item: Keyword, i: number) => (
          <Button key={i} data={item.data} />
        ))}
      </div>
    </div>
  );
}
