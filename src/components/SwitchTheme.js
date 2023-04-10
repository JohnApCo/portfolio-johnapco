import { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function SwitchTheme() {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleTheme = () => {
    colorTheme === "light" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer fixed z-50 top-3 sm:top-8 lg:top-52 right-14 sm:right-24 lg:left-0 lg:right-auto border-none bg-transparent sm:bg-divider rounded-md text-4xl p-0 sm:p-2 sm:border-divider_menu lg:text-black  lg:bg-white lg:rounded-e-md lg:rounded-s-none lg:shadow-[0_0_2px_rgba(0,0,0,0.3)]"
    >
      {colorTheme === "light" ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
}
export default SwitchTheme;
