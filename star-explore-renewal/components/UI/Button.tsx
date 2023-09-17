export default function Button({ children }: any) {
  return (
    <button className="w-[104px] text-xl text-star-blue border-2 rounded-2xl border-star-blue hover:bg-star-blue hover:text-space-black">
      {children}
    </button>
  );
}
