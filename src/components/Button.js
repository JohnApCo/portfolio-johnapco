import Link from "next/link";

function Button({ children, icon, ...other }) {
  return (
    <button
      className="select-none outline-none uppercase border border-solid border-primary overflow-hidden inline-block leading-normal rounded-full text-center cursor-pointer py-[0.8rem] pl-8 pr-16 font-semibold bg-transparent relative z-[1] before:-z-[1] before:bg-primary before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:translate-x-full before:transition-transform before:duration-300 before:ease-out before:hover:translate-x-0 [&:hover_span]:text-white"
      {...other}
    >
      <span className="text-text">{children}</span>
      <span
        className={`text-white bg-primary absolute -right-[1px] -top-[1px] h-[calc(100%+2px)] aspect-square flex items-center justify-center text-xl rounded-[50%]`}
      >
        {icon}
      </span>
    </button>
  );
}
export default Button;
