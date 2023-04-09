import { useState } from "react";
import useDarkSide from "../hooks/useDarkSide";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function SwitchTheme() {
  const [colorTheme, setTheme] = useDarkSide();

  return (
    <div className="cursor-pointer fixed z-50 top-1 sm:top-8 right-16 xs:right-20 sm:right-24 lg:left-0 lg:h-[calc(50vh)] flex items-center ">
      <div className="border-none bg-divider rounded-md text-4xl p-2 sm:border-divider_menu lg:text-black  lg:bg-white lg:rounded-e-md lg:rounded-s-none lg:shadow-[0_0_2px_rgba(0,0,0,0.3)]">
        {colorTheme === "light" ? (
          <MdDarkMode onClick={() => setTheme("light")} />
        ) : (
          <MdLightMode onClick={() => setTheme("dark")} />
        )}
      </div>
    </div>
  );
}
export default SwitchTheme;
