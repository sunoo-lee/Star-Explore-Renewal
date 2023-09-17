export default function ResultItem({ title }: any) {
  return (
    <li className="pb-3 text-white/50 cursor-pointer hover:text-white last:pb-0">
      <div>
        <span className="font-kr text-xl font-medium ">{title}</span>
      </div>
    </li>
  );
}
