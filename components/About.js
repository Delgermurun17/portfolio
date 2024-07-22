import Image from "next/image";
import { Tag } from "./Tag";

export function About(){
    return <div className="bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="max-w-screen-xl m-[auto] px-4 md:px-8 md:py-24 py-16">
        <div className="flex justify-center md:mb-12 mb-6">
        <div className="flex"><Tag ner="About me"/></div>
        </div>
        <div className="md:flex justify-between">
                <div className="flex justify-center md-h-max">
                    <Image alt="about" width={400} height={480} className="dark:hidden" src="About.svg"/>
                    <Image alt="about" width={400} height={480} className="hidden dark:block" src="about-dark.svg"/>
                    </div>

                <div className="flex flex-col max-w-[584px] md-mt-0 mt-12">
                    <div className="text-3xl font-semibold mb-[10px]" >Curious about me? Here you have it:</div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">I&apos;m a passionate, <u>self-proclaimed designer</u> who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</div>    
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on <u>Twitter</u> where I share tech-related bites and build in public, or you can follow me on <u>GitHub</u>.</div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">Finally, some quick bits about me.</div>
                    <div className="flex justify-evenly text-base text-gray-600 dark:text-gray-300 mb-[10px]">
                        <div className="">
                        <li>B.E. in Computer Engineering</li>
                        <li>Full time freelancer</li>
                        </div>
                        <div className="">
                        <li>Avid learner</li>
                        <li>Aspiring indie hacker</li>
                        </div>

                    </div>
                    <div className="mb-[10px] text-gray-600 dark:text-gray-300 text-base">One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉</div>
            </div>
        </div>
    </div>
    </div>
}