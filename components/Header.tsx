
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to allow navigation between game start and leaderboard
*/

import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-1 md:m-2 text-lg md:text-xl hover:underline text-white";
    return (
      <header className="flex h-20 absolute top-0 left-0 w-screen bg-[#5863F8]">
        <nav className="flex justify-between items-center w-full px-1 md:px-6">
            <ul className={"flex justify-between items-center"}>
                <li>
                  <Link href="/" className="text-3xl md:text-5xl font-semibold pr-5 text-white">
                    FlickPic
                  </Link>
                </li>
                <li>
                  <Link href="/" className={linkStyling}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className={linkStyling}>
                    Leaderboard
                  </Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }