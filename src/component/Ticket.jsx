import IMG from "../assets/img/tic1.jpg";
export default function Ticket({ name, img, director, zhanr }) {
  return (
    <div className="w-[550px] cursor-pointer lg:w-[40%] gap-5  h-[250px] border-[.2px] border-gray-500 rounded-lg m-2 flex flex-wrap content-start backdrop-blur-3xl bg-[#5a585829]">
      <figure className=" h-[87%] w-[30%] rounded-md ms-3 my-3">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </figure>
      <div className="mr-5 h-full w-[60%] flex flex-wrap content-center">
        <h3 className="h-[40px] w-full  flex justify-between items-center text-white text-[18px]  mt-3 tracking-wider">
          {name}
          <div className="bg-[#0a0a0a68] w-[80px] h-[25px] rounded-[20px] ml-1 flex justify-center items-center  text-[12px]">
            <svg
              className="rotate90 rotate-[90]"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="white"
              class="bi bi-ticket"
              viewBox="0 0 16 16">
              <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
            </svg>
            اکران آنلاین
          </div>
        </h3>
        <p className="w-full h-[40px]  flex items-center justify-start text-[#999797]  tracking-wider text-[15px]">
          کارگردان: {director}
        </p>

        <div className="w-full flex items-center justify-start h-[50px]">
          <span className="mx-1 w-[60px] h-[25px] rounded-[25px] bg-[#0a0a0a68] flex justify-center items-center">
            <div className="text-white text-[12px] mx-1  tracking-wider flex justify-center items-center">
              {zhanr}
            </div>
          </span>
        </div>

        <div className="w-full h-[60px]  flex items-center justify-start">
          <span className="mb-3 flex justify-center items-center h-[42px] w-[75px] ms-2 rounded-lg text-white  tracking-wider text-[13px] border">
            خرید بلیت
          </span>
        </div>
      </div>
    </div>
  );
}
