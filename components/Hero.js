import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { PiGithubLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";




export function Hero(){
    return <div className="md:flex justify-between flex-row-reverse max-w-screen-xl m-[auto] px-4 md:px-8 md:py-24 py-16">
    <div className="flex flex-row-reverse items-center justify-center md:w-full">
        <Image alt="pic" width={280} height={320} className="dark:hidden" src="Pic.svg"/>
        <Image alt="pic" width={280} height={320} className="hidden dark:block" src="hero-dark.svg"/>
    </div>



    <div className="max-w-[768px] ">
        <div className="md:text-6xl md:font-semibold text-4xl font-bold mb-2 dark:text-gray-50 text-gray-900 md:mt-0 mt-12">Hi, I&apos;m Sagar 👋</div>
        <div className="text-base dark:text-gray-300 text-gray-600">I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</div>
        <div className="my-12 h-14 flex justify-between flex-col">
            <div className="flex dark:text-gray-300 text-gray-600">
                <SlLocationPin className="size-6"/>
                Ahmedabad, India</div>
            <div className="flex dark:text-gray-300 text-gray-600">
                <div className="size-6 flex justify-center items-center"><GoDotFill className="size-4 text-green-600"/></div>
                Available for new projects</div>
        </div>
        <div className="flex dark:text-gray-300 text-gray-600">
            <div className="size-9 flex justify-center items-center"><PiGithubLogo className="size-6"/></div>
            <div className="size-9 flex justify-center items-center"><PiTwitterLogo className="size-6"/></div>
            <div className="size-9 flex justify-center items-center"><FaFigma className="size-6"/></div>
        </div>
    </div>
</div>
}