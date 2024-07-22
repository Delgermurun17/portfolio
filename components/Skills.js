import { Tag } from "./Tag";

export function Skills(){
    return <div className="max-w-screen-xl m-[auto] px-4 md:px-8 md:py-24 py-16">
        <div className="flex justify-center"><Tag ner="Skills" /></div>
        <div className="text-center mt-4 md:text-xl text-lg text-gray-600 dark:text-gray-300">
        The skills, tools and technologies I am really good at:
        </div>
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 md:mt-12 mt-6">
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/js.svg"/>Javascript</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/ts.svg"/>Typescript</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/react.svg"/>React</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/next.svg"/>Next.js</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/node.svg"/>Node.js</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="dark:hidden transition-transform duration-300 md:hover:scale-110" src="skills/ex.svg"/><img className="hidden dark:block transition-transform duration-300 md:hover:scale-110" src="skills/ex-dark.svg"/>Express.js</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/nest.svg"/>Nest.js</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="dark:hidden transition-transform duration-300 md:hover:scale-110" src="skills/socket.svg"/><img className="hidden dark:block transition-transform duration-300 md:hover:scale-110" src="skills/socket-dark.svg"/>Socket.js</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/postgre.svg"/>PostgreSQL</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/mongo.svg"/>MongoDB</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/sass.svg"/>Sass/Scss</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/tailwind.svg"/>Tailwindcss</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/figma.svg"/>Figma</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="dark:hidden transition-transform duration-300 md:hover:scale-110" src="skills/cy.svg"/><img className="hidden dark:block transition-transform duration-300 md:hover:scale-110" src="skills/cy-dark.svg"/>Cypress</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/story.svg"/>Storybook</div>
            <div className="text-lg font-normal text-gray-600 mb-12 flex flex-col items-center gap-2"><img className="transition-transform duration-300 md:hover:scale-110" src="skills/git.svg"/>Git</div>
        </div>
    </div>
}