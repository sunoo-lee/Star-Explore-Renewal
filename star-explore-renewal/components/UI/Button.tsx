export default function Button({ children }: any) {
  return (
    <button className="w-[104px] py-0.5 text-xl text-star-blue border rounded-3xl border-star-blue hover:bg-star-blue hover:text-space-black">
      {children}
    </button>
  );
}
