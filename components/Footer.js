import { PiCopyrightBold } from "react-icons/pi";



export function Footer(){
    return (
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 h-[68px] font-normal text-sm text-gray-600 dark:text-gray-300">
            <PiCopyrightBold className="size-4"/>
            <div>2023 | <u>Designed</u> and <u>coded</u> with ❤️️ by Sagar Shah</div>
        </div>
    )
}