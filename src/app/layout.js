import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Provivders from "../../redux/provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Provivders>
          <div className="flex-1 flex flex-row justify-start min-w-full">
            <div className="basis-5/6 ml-6 h-screen mobile:mt-20 mobile:min-w-full">
              {children}
              {/* <p className="mt-20">children</p> */}
            </div>
            <div className="bg-cyan-950 basis-1/6 h-screen fixed right-0 pl-8 mobile:min-w-full mobile:fixed top-0 mobile:h-20 text-white">
              <Navbar />
              {/* <p>navbar</p> */}
            </div>
          </div>
        </Provivders>

      </body>
    </html>
  );
}
