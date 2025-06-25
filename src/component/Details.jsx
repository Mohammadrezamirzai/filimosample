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
    <section className={`${show === y ? "flex" : "hidden"}  mb-100`}>
      <div>
        <img
          src={img}
          alt=""
          className="absolute  w-full h-[400px] object-fill"
        />
      </div>
      <div className="bg-[#00000098] h-[400px] w-full flex flex-col absolute justify-center  items-end px-16 ">
        <h5 className="text-3xl font-bold text-gray-100">{name}</h5>
        <p className="text-gray-100 font-light text-xs md:text-sm pt-4">{nameE}</p>
        <h6 className="pt-5 text-gray-100 text-sm md:text-md lg:text-md font-medium">کارگردان : {kargardan}</h6>
        <div className="flex space-x-4 pt-4 text-xs md:text-sm lg:text-md">
          <div className="bg-[#282828] rounded-full px-2 py-1 text-green-800">
            {like}
          </div>
          <div className="bg-[#282828] rounded-full px-2 py-1 text-yellow-600">
            {imdb}
          </div>
          <div className="bg-[#282828] rounded-full px-2 py-1 text-gray-100">
            {zhanr}
          </div>
        </div>
        <p className="text-sm md:text-md font-bold   text-gray-200 pt-6 text-end">{kholase}</p>
      </div>
    </section>
  );
}
