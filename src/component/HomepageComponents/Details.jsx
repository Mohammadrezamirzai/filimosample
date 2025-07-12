export default function Details({
  show,
  y,
  img,
  name,
  nameE,
  kargardan,
  like,
  imdb,
  zhanr,
  kholase,
}) {
  return (
    <section className={`${show === y ? "flex" : "hidden"} relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-2xl`}>
      {/* Background image */}
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-end w-full h-full px-8 md:px-16">
        <h5 className="text-3xl font-extrabold text-white drop-shadow-lg">{name}</h5>
        <p className="text-gray-200 font-light text-base md:text-lg pt-2">{nameE}</p>
        <h6 className="pt-4 text-gray-200 text-md font-medium">کارگردان : {kargardan}</h6>
        <div className="flex flex-row-reverse gap-4 pt-4 text-xs md:text-sm">
          <div className="bg-[#282828cc] rounded-full px-3 py-1 text-green-400 font-bold shadow">{like}</div>
          <div className="bg-[#282828cc] rounded-full px-3 py-1 text-yellow-400 font-bold shadow">{imdb}</div>
          <div className="bg-[#282828cc] rounded-full px-3 py-1 text-white font-bold shadow">{zhanr}</div>
        </div>
        <p className="text-base md:text-lg font-bold text-gray-100 pt-6 text-end leading-7 max-w-2xl">{kholase}</p>
      </div>
    </section>
  );
}
