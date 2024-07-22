import { LuMenu } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { Menubar } from "./Menubar";
import Link from "next/link";



export function Header() {

  const [open, setOpen] = useState(false);

  function openMenu(){
    setOpen(true)
  }

  function closeMenu(){
    setOpen(false)
  }
    

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between m-[auto] px-4 md:px-8 py-4">
      <div><Link target="_self" class="" href="/">
        <div class="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 dark:text-gray-50 font-bold">
          &lt;SS /&gt;
        </div>
      </Link>
      </div>
        <div className="flex justify-between items-center font-medium text-base text-gray-600 dark:text-gray-300"><div className="hidden md:block">
          <div className="flex">
          <div>About</div>
          <div className="mx-6">Work</div>
          <div className="mr-6">Testimonials</div>
          <div>Contact</div></div>
        </div>
        <div className="hidden md:block border-r h-6 border-gray-100 dark:border-gray-800 mx-6"></div>
            <div className="hidden md:block mr-4">
              <div className="dark:hidden"><div className="size-9 flex justify-center items-center"><FiSun className="size-6"/></div></div>
              <div className="hidden dark:block"><div className="size-9 flex justify-center items-center"><LuMoonStar className="size-6"/></div></div>
            </div>
            <div className="hidden md:block"><div className="flex justify-center items-center text-gray-50 bg-gray-900 dark:text-gray-900 dark:bg-gray-50 rounded-xl h-9 w-[136px]">Download CV</div>
            </div>
        </div>
      <div className="md:hidden size-9 flex justify-center items-center"><LuMenu onClick={openMenu} className="size-6"/>
        <div className={open ? "block" : "hidden"}>
          <div onClick={closeMenu} className="fixed inset-0 bg-gray-400 dark:bg-white"></div>
          <div className="fixed top-0 bottom-0 right-0 w-[320px] text-black dark:text-white bg-white dark:bg-black shadow-lg">
            <div className="flex justify-between m-4">
              <div class="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 dark:text-gray-50 font-bold">
                &lt;SS /&gt;
              </div>
              <div className="size-9 flex justify-center items-center">
                <IoClose onClick={closeMenu} className="size-6 text-gray-600"/>
              </div>
            </div>
            <div>
              <div className="border-y dark:border-gray-800 border-gray-100">
                <div className="ml-4 my-4"><Menubar menuItem="About"/></div>
                <div className="ml-4 mb-4"><Menubar menuItem="Work"/></div>
                <div className="ml-4 "><Menubar menuItem="Testimonials"/></div>
                <div className="ml-4 my-4"><Menubar menuItem="Contact"/></div>
              </div>
              <div className="flex justify-between items-center h-9 m-4">
                <Menubar menuItem="Switch Theme"/><div className="text-gray-600 dark:text-gray-300">
                  <div className="dark:hidden"><div className="size-9 flex justify-center items-center"><FiSun className="size-6"/></div></div>
                  <div className="hidden dark:block"><div className="size-9 flex justify-center items-center"><LuMoonStar className="size-6"/></div></div>
                  </div>
              </div>
              <div className="flex justify-center items-center text-gray-50 bg-gray-900 dark:text-gray-900 dark:bg-gray-50 rounded-xl h-9 m-4">Download CV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
