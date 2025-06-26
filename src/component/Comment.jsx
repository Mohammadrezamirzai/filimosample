import user from "../assets/img/user.png";


export default function Comment({ name, description }) {
  return (
    <div className="mt-8 rounded-2xl border border-gray-700 bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 h-[220px] transition-transform duration-300 hover:scale-105">
      <div className="w-full h-1 bg-gradient-to-l from-orange-400 to-yellow-400 rounded-t-2xl" />
      <div className="flex items-center justify-center mt-4 space-x-2">
        <img src={user} className="h-10 w-10 rounded-full border-2 border-orange-400 shadow" alt="user avatar" />
        <h6 className="text-base font-bold text-gray-200 ">{name}</h6>
      </div>
      <p className="text-sm text-gray-100 text-center px-6 ">{description}</p>
    </div>
  );
}
