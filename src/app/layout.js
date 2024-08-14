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
          <div  className='flex flex-col basis-10/12 h-screen'>
          {children}
          </div>
          <div className="flex flex-col basis-3/12 fixed right-0 h-screen bg-cyan-950">
          <Navbar/>
          </div>
        </Provivders>

      </body>
    </html>
  );
}
