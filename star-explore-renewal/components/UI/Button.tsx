import keywordStore from "@/store/keywordStore";

export default function Button({ data }: any) {
  const keywordList = keywordStore((state) => state.keywordList);
  const selectKeyword = keywordStore((state) => state.selectKeyword);
  const deleteKeyword = keywordStore((state) => state.deleteKeyword);

  const isSelected = keywordList.includes(data);
  const buttonClass =
    "font-noto font-medium w-20  md:w-[104px] py-0.5 text-lg md:text-xl border rounded-3xl border-star-blue hover:bg-star-blue hover:text-space-black ";
  const selectTrue = buttonClass + "bg-star-blue text-space-black";
  const selectFalse = buttonClass + "bg-space-black text-star-blue";

  const onButtonClickHandler = () => {
    if (data === "-") return;
    if (isSelected) {
      deleteKeyword(data);
    } else {
      if (keywordList.length >= 6) return;
      selectKeyword(data);
    }
  };

  return (
    <button
      onClick={onButtonClickHandler}
      className={isSelected ? selectTrue : selectFalse}
    >
      {data}
    </button>
  );
}
