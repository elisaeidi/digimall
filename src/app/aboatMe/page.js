import Image from "next/image";

export default function Aboat() {
    return (
        <div className="flex-1 flex flex-col  text--cyan-950 p-4">
            {/* <Image className='rounded-full' width={100} height={100} src="/images/Elahe_Saeedi.jpg" /> */}

            {/* profile */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">profile</legend>
                <h1>hi ,I'm Elahe Saeedi</h1>
                <p>Elaheh Saeedi
                    [Your Phone Number] | [Your Email Address] | [Your LinkedIn Profile] | [Your GitHub Profile] | [Your Location]</p>

            </fieldset>
            {/* Professional Summary */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">Professional Summary</legend>
                <p> Dedicated Front-End Developer with 4 years of experience in website development, specializing in React and Next.js frameworks. Proficient in creating dynamic and responsive web applications with a strong focus on user experience. Currently enhancing skills in Next.js and working on a personal e-commerce project to deepen understanding of advanced web technologies.</p>
            </fieldset>
            {/* Technical Skills  */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">Technical Skills </legend>
                <ul className="list-none p-2">
                    <li className="font-bold">Languages
                        <ul className="list-disc font-light text-base p-4">
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </li>
                    <li className="font-bold">Frameworks
                        <ul className="list-disc font-light p-4">
                            <li>React.js</li>
                            <li>Next.js</li>
                        </ul>
                    </li>
                    <li className="font-bold">State Management
                        <ul className="list-disc font-light p-4">
                            <li>Redux</li>
                        </ul>
                    </li>
                    <li className="font-bold">Styling
                        <ul className="list-disc font-light p-4">
                            <li>Tailwind CSS</li>
                        </ul>
                    </li>
                    <li className="font-bold">Other Technologies: RESTful APIs, Responsive Design</li>
                </ul>
            </fieldset>
            {/* Professional Experience */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">Professional Experience</legend>
                <p>
                    Professional Experience
                    Front-End Developer
                    [Fardap company] - [Kerman,Iran]
                    [june,2021] – Present

                    Developed and maintained responsive web applications using React, ensuring high performance and user engagement.
                    Implemented state management solutions with Redux to manage application state effectively.
                    Collaborated with designers and back-end developers to create seamless user experiences.
                    Conducted code reviews and provided mentorship to junior developers.
                </p>

            </fieldset>
        </div>
    )

}