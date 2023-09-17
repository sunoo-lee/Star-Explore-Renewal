export default function Result() {
  return (
    <div className="font-avant w-64 min-h-0 h-96 bg-star-blue/60 rounded-3xl z-10">
      <div className="text-center pt-2 text-2xl font-medium border-2 border-star-blue rounded-full text-space-black bg-star-blue  uppercase">
        <span>result: </span>
        <span>000</span>
      </div>
      <div className="p-6 px-8">
        <ul>
          <li className="pb-4">
            <div>
              <span className="font-kr text-xl font-medium text-white/50 hover:text-white">
                사건의 지평선
              </span>
            </div>
          </li>
          <li>
            <div>
              <span className="font-kr text-xl font-medium text-white/50 hover:text-white">
                오르트구름
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
