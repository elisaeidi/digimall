import Image from "next/image";
import Link from "next/link";

export default function Aboat() {
    const startYear=94;
    const endYear=98;
    const nintynine = 99;
    const time = 3;
    return (
        <div dir="rtl" className="flex-1 flex flex-col  text--cyan-950 p-4">
            {/* <Image className='rounded-full' width={100} height={100} src="/images/Elahe_Saeedi.jpg" /> */}

            {/* profile */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">پروفایل</legend>

                {/* <p>Elaheh Saeedi</p>
                <p>you can conenction to Me by</p>
                <p><span>Phone Number : </span><span className="font-light text-base">09036047690</span></p>
                <p><span>Email Address : </span><span className="font-light text-base">eng.saeedi1993@gmail.com</span></p>
                <p><span>GitHub Profile : </span><span className="font-light text-base">softwarEngineer.saeedi@gmail.com</span></p>
                <p><span>Location : </span><span className="font-light text-base">Kerman,Iran</span></p> */}
                {/* [Your LinkedIn Profile]  */}
                <p>سلام من <strong>الهه سعیدی</strong> هستم</p>
                {/* 
                 */}
                 <span>{`شروع تحصیلات من از سال ${startYear.toLocaleString("fa")}-${endYear.toLocaleString("fa")} در رشته مهندسی کامپیوتر (نرم افزار ) بود`}</span>
                 <span>{` مدتی بعد با راهنمایی اساتیدم وارد حوزه توسعه وبسایت شدم و برای اولین بار توانستم در شرکت فرداپ کرمان به عنوان کارآموز با محیط و پروژه های واقعی آشنا بشوم  بعد از  گذشت `}</span>
                 <span>{`مدت ${time.toLocaleString("fa")} ماه به عنوان کارشناس فرانت اند مشغول به کار شدم `}</span>
                 <span>و در حال حاضر تصمیم به کسب تجربه های جدید با فریمورک next.js هستم </span>
                 <span>همچنین اقدام به پیاده سازی یک فروشگاه اینترنتی برای کسب تجربه و آمادگی هرچه بیشتر برای شروع همکاری با شرکت هایی که با تکنولوژی های جدید مشغول به فعالیت هستند کرده ام </span>
                <p>در حال حاضر مشغول پیاده سازی این فروشگاه با next.js هستم و قسمت های تکمیل شده آن در گیت هاب من می توانید مشاهده کنید</p>
                <p className="mt-4">باعث افتخار من است که شما بزرگواران نظرات و پیشنهادات همکاری خود را از طریق راه های ارتباطی زیر با من به اشتراک بگذارید :</p>
                <p><span>شماره تماس : </span><span dir="rtl" className="font-light text-base text-orange-600">0903-604-7690</span></p>
                <p><span>آدرس ایمیل : </span><span className="font-light text-base text-orange-600"><Link href="eng.saeedi1993@gmail.com">eng.saeedi1993@gmail.com</Link></span></p>
                <p><span>پروفایل گیت هاب : </span><span className="font-light text-base text-orange-600"><Link href="https://github.com/elisaeidi/digimall.git">softwarEngineer.saeedi@gmail.com</Link></span></p>
                <p><span>محل سکونت : </span><span className="font-light text-base text-orange-600">کرمان</span></p>
                {/* [Your LinkedIn Profile]  */}

            </fieldset>
            {/* Professional Summary */}
            {/* <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">Professional Summary</legend>
                <p> Dedicated Front-End Developer with 4 years of experience in website development, specializing in React and Next.js frameworks. Proficient in creating dynamic and responsive web applications with a strong focus on user experience. Currently enhancing skills in Next.js and working on a personal e-commerce project to deepen understanding of advanced web technologies.</p>
            </fieldset> */}
            {/* Technical Skills  */}
            <fieldset className="border border-orange-600 p-4 m-6">
                <legend className="italic text-base font-bold px-2 text-orange-600">مهارت ها</legend>
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
            {/* <fieldset className="border border-orange-600 p-4 m-6">
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

            </fieldset> */}
        </div>
    )

}