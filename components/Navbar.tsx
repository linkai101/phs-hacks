import Link from "next/link";
import Image from "next/image";
import MainIcon from "../public/wird.svg";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiClose, mdiHamburger } from "@mdi/js";
function Navbar() {
    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav
            className={`w-screen ${menuOpen ? "h-screen" : "h-16"}
            bg-transparent
            fixed top-0
            z-20
            `}
        >
            <div className="w-4/5 h-full max-w-6xl mx-auto flex items-starts justify-between">
                <div className="h-16 flex items-center">
                    <Link href="/">
                        <Image src={MainIcon} width="50" height="50" />
                    </Link>
                </div>
                <div
                    className={`flex flex-col gap-5 mt-16 ${
                        menuOpen ? "h-full" : "h-0"
                    } overflow-hidden md:flex-row md:h-full md:mt-0 transition-[height] items-center`}
                >
                    <Link href="/">
                        <a className="text-xl text-center">Home</a>
                    </Link>
                    <Link href="/#about">
                        <a className="text-xl text-center">About</a>
                    </Link>
                    <Link href="/schedule">
                        <a className="text-xl text-center">Schedule</a>
                    </Link>
                    <Link href="/prizes">
                        <a className="text-xl text-center">Prizes</a>
                    </Link>

                    <Link
                        href="https://live.poolesvillehacks.tech/"
                        target="_blank"
                    >
                        <a className="text-xl p-2 md:hidden text-center bg-white text-black ">
                            Register
                        </a>
                    </Link>
                </div>
                <div className="h-16 flex items-center">
                    <Link
                        href="https://live.poolesvillehacks.tech/"
                        target="_blank"
                    >
                        <a
                            className={`text-xl p-2 hidden text-center bg-white text-black md:block`}
                        >
                            Register
                        </a>
                    </Link>
                    <button
                        className="md:hidden"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                    >
                        {menuOpen ? (
                            <Icon path={mdiClose} title="open" size={1.2} />
                        ) : (
                            <Icon
                                path={mdiHamburger}
                                title="close"
                                size={1.2}
                            />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
