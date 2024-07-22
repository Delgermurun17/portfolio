import { LuMail } from "react-icons/lu";
import { FiCopy } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { Tag } from "./Tag";


export function GetInTouch(){
    return <div className="max-w-screen-xl m-[auto] px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8 md:my-24 my-20">
            <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center"><Tag ner="Get in touch" /></div>
            <div className="text-center mt-4 text-gray-600 text-normal text-xl max-w-xl dark:text-gray-300">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</div>
            <div className="flex flex-col items-center text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
                <LuMail className="md:size-8 size-6"/>
                <div className="font-semibold md:text-4xl text-lg text-gray-900 dark:text-gray-50 md:mx-5 mx-4">reachsagarshah@gmail.com</div>
                <div className="md:size-11 size-9 flex justify-center items-center"><FiCopy className="md:size-8 size-6"/></div>
            </div>
            <div className="flex items-center">
                <FiPhone className="md:size-8 size-6"/>
                <div className="font-semibold md:text-4xl text-lg text-gray-900 dark:text-gray-50 md:mx-5 mx-4">+91 8980500565</div>
                <div className="md:size-11 size-9 flex justify-center items-center"><FiCopy className="md:size-8 size-6"/></div>
            </div>
            </div>
            <div className="dark:text-gray-300 text-gray-600 flex flex-col items-center">
                <div className="text-base font-normal">You may also find me on these platforms!</div>
                <div className="flex">
                    <div className="size-9 flex justify-center items-center"><PiGithubLogo className="size-6"/></div>
                    <div className="size-9 flex justify-center items-center"><PiTwitterLogo className="size-6"/></div>
                    <div className="size-9 flex justify-center items-center"><FaFigma className="size-6"/></div>
                </div>
            </div>
            </div>
        </div>    
    </div>
}