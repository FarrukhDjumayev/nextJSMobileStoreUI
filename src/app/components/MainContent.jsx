export default function MainContent() {
  return (
    <div className="container grid grid-cols-2 py-4">
      <div className="flex items-start flex-col justify-center">
        <h3 className="p-2 font-medium text-[#FA6B1C] ">SALE UP TO 30% OFF</h3>
        <h1 className="p-2 text-4xl font-bold">Apple Watch Series</h1>
        <p className="p-2 text-base">
          Featured packed at a batter value than over pawerful sensors to
          manitor your fitness
        </p>
        <button className="btn-color py-2 px-4 rounded-4xl">
          Shop now &rarr;
        </button>
      </div>
      <div>
        <img className="object-contain" src="/appleWatchs.svg" alt="Apple Watchs" />
      </div>
      
    </div>
  );
}
