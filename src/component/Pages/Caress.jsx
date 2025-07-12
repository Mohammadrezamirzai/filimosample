import { careers } from "../../data/caress";
import { useNavigate } from "react-router-dom";

export default function Caress() {
  const navigate = useNavigate();
  const handleApply = (job) => {
    navigate(`/apply?id=${job.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text ">
        فرصت‌های شغلی
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">
        {careers.map((job) => (
          <div
            key={job.id}
            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col space-y-3">
            <h3 className="text-xl font-semibold text-white mb-1">
              {job.title}
            </h3>
            <p className="text-gray-300 text-sm mb-2">{job.description}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-green-300 text-sm">{job.location}</span>
              <span className="text-blue-300 text-sm font-bold">
                {job.salary}
              </span>
            </div>
            <button
              onClick={() => handleApply(job)}
              className="mt-4 w-full py-2 cursor-pointer px-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50">
              درخواست همکاری
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
