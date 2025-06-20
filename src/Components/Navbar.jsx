import { useState } from "react";
import logo from "../images/Agyenim logo.png";
import menu from "../icons/menu.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="font-mono py-4 text-white flex justify-around items-center mt-2">
                <Link to="/">
                    <img src={logo} className="rounded-full w-12" alt="" />
                </Link>
                <button
                    className="focus:outline-none flex lg:hidden"
                    onClick={() => setisOpen(!isOpen)}
                >
                    {isOpen ? (
                        <span className="text-3xl text-white">X</span>
                    ) : (
                        <img
                            src={menu}
                            width={22}
                            height={22}
                            alt="menu"
                            className="flex lg:hidden "
                        />
                    )}
                </button>
                <ul className="mt-1 hidden lg:flex justify-center items-center space-x-12 text-2xl">
                    <li>
                        <a
                            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                            duration={500}
                            href="#about"
                        >
                            About us
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                            href="#campaigns"
                        >
                            Campaigns
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                            href="#announcement"
                        >
                            Announcements
                        </a>
                    </li>
                    <li>
                        <Link
                            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                            to="/blogs"
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>
            </div>
            {isOpen && (
                <div className="bg-green-900 mx-0 ">
                    <ul className="flex flex-col p-1 justify-center items-center transition duration-500">
                        <li>
                            <a
                                onClick={() => setisOpen(!isOpen)}
                                href="#campaigns"
                                className="text-white text-2xl hover:no-underline hover:border-b border-yellow-300 cursor-pointer px-1 block transition duration-500 cursor-pointer"
                            >
                                Campaigns
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setisOpen(!isOpen)}
                                href="#announcement"
                                className="text-white text-2xl hover:no-underline hover:border-b border-yellow-300 cursor-pointer px-1 block transition duration-500 cursor-pointer"
                            >
                                Announcement
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setisOpen(!isOpen)}
                                href="#about"
                                className="text-white text-2xl hover:no-underline hover:border-b border-yellow-300 cursor-pointer px-1 block transition duration-500 cursor-pointer"
                            >
                                About us
                            </a>
                        </li>
                        <li>
                            <Link
                                onClick={() => setisOpen(!isOpen)}
                                to="/contact"
                                className="text-white text-2xl hover:no-underline hover:border-b border-yellow-300 cursor-pointer px-1 block transition duration-500 cursor-pointer"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setisOpen(!isOpen)}
                                to="/blogs"
                                className="text-white text-2xl hover:no-underline hover:border-b border-yellow-300 cursor-pointer px-1 block transition duration-500 cursor-pointer"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            <hr />
        </>
    );
}

export default Navbar;
