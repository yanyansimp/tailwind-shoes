export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">
          SHOPE NOW +
        </div>
      </div>
      <img className="absolute left-[40%] h-40 w-56 top-5" src={item.src} />
    </div>
  );
}
