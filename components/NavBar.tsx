
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to allow navigation between game start and leaderboard
*/

import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-xl hover:underline text-white";
    return (
      <header className="flex justify-between items-center h-20">
        <nav className="p-2 m-4">
          <Link href="/" className={linkStyling}>
            Home
          </Link>
          <Link href="/leaderboard" className={linkStyling}>
            Leaderboard
          </Link>
        </nav>
      </header>
    );
  }