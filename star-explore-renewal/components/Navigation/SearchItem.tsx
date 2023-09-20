import Image from "next/image";
import arrow from "../../asset/arrow.svg";
import keywordStore from "@/store/keywordStore";

export default function SearchItem({ title }: any) {
  const selectResult = keywordStore((state) => state.selectResult);
  const resetKeyword = keywordStore((state) => state.resetKeyword);
  const onClickHandler = () => {
    resetKeyword();
    selectResult(title);
  };
  return (
    <li
      onClick={onClickHandler}
      className="py-3 pl-4 pr-3 cursor-pointer hover:bg-blue-400/50"
    >
      <div className="flex items-center justify-between text-xl font-medium">
        <span>{title}</span>
        <div className="w-4">
          <Image src={arrow} alt="연관 검색어 아이콘" />
        </div>
      </div>
    </li>
  );
}
