import keywordStore from "@/store/keywordStore";

export default function ResultItem({ title }: any) {
  const selectResult = keywordStore((state) => state.selectResult);
  const onClickHandler = () => {
    selectResult(title);
  };
  return (
    <li
      onClick={onClickHandler}
      className="pb-3 text-white/50 cursor-pointer hover:text-white last:pb-0"
    >
      <div>
        <span className="font-kr text-xl font-medium ">{title}</span>
      </div>
    </li>
  );
}
