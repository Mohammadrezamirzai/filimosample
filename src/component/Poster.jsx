export default function Poster({ img, focus, focusNumber, x }) {
  return (
    <div className="flex items-center w-[150px] h-[200px] duration-150  ">
      <img
        onClick={focus}
        src={img}
        className={`${
          focusNumber === x && "scale-120"
        } h-full w-full rounded-xl cursor-pointer "`}
      />
      ;
    </div>
  );
}

