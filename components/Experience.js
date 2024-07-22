import { List } from "./List";
import { Tag } from "./Tag";

export function Experience(){
    return <div className="w-full py-16 md:py-24 2xl:py-24 bg-gray-50  dark:bg-gray-900 dark:text-whitenp">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
            <div className="flex flex-col items-center gap-4">
                <div className="self-center"><Tag ner="Experience" /></div>
                <div className="text-center mt-4 text-gray-600 dark:text-gray-300 text-normal text-lg md:text-xl max-w-xl">Here is a quick summary of my most recent experiences:</div>
            </div>
            <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
               <div> <img src="upwork.svg" /></div>
               <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4"><div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">Sr. Frontend Developer</div>
                <List list="Lorem ipsum dolr sit amet, consectetur adipiscing elit." />
                <List list="Ut pretium arcu et massa semper, id fringilla leo semper." />
                <List list="Sed quis justo ac magna." />
                <List list="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
               </div>
               <div className="text-base text-gray-700 font-normal dark:text-gray-200">Nov 2021 - Present</div>
            </div>
            <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
                <div> <img src="upwork.svg" /></div>
                <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                    <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">Team Lead</div>
                    <List list="Sed quis justo ac magna." />
                    <List list="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <List list="Sed quis justo ac magna." />
                    <List list="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
                <div className="text-base text-gray-700 font-normal dark:text-gray-200">Jul 2017 - Oct 2021</div>
            </div>
            <div className="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
                <div> <img src="upwork.svg" /></div>
                <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                    <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">Full Stack Developer</div>
                    <List list="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                </div>
                <div className="text-base text-gray-700 font-normal dark:text-gray-200">Dec 2015 - May 2017</div>
            </div>
        </div>
    </div>
}