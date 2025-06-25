import user from "../assets/img/user.png";


export default function Comment({ name, description }) {
  return (
    <div className="mt-8 rounded-md border border-gray-800 bg-[#21040404] flex flex-col items-center space-y-4  h-[180px]">
      <div className="flex items-center justify-center mt-8 space-x-2">
        <h6 className="text-sm font-bold text-gray-500  ">{name}</h6>
        <img src={user} className="h-5 w-5" />
      </div>
      <p className="text-xs  text-gray-200 text-center  px-4 ">{description}</p>
    </div>
  );
}
