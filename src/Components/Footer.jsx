import React from "react";
import facebookLogo from "../icons/social.png";
import linkedin from "../icons/linkedin.png";
import twitter from "../icons/twitter.png";
import tiktok from "../icons/tiktok.png";
import instagram from "../icons/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center md:text-left bg-gradient-to-tr from-green-700 via-green-600 to-green-700 text-white">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Agyenim Boateng Foundation</h1>
          <p className="text-lg">
            Making a difference, <br /> one act of kindness at a time
          </p>
          <div className="flex gap-1 lg:gap-4  mt-2 mx-auto md:mx-0">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-md hover:bg-orange-600 transition"
            >
              <img
                src={facebookLogo}
                alt="Facebook"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-md hover:bg-orange-600 transition"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-md hover:bg-orange-600 transition"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-orange-600 transition"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="p-2 rounded-md hover:bg-orange-600 transition"
            >
              <img
                src={tiktok}
                alt="TikTok"
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">Quick Links</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#hero" className="text-lg hover:font-bold transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg hover:font-bold transition">
                About us
              </a>
            </li>
            <li>
              <a
                href="#campaigns"
                className="text-lg hover:font-bold transition"
              >
                Campaign
              </a>
            </li>
            <li>
              <a href="/blogs" className="text-lg hover:font-bold transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:font-bold transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold transition">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold transition">
                Cookies & Preferences
              </a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <div className="bg-yellow-500 p-4 rounded">
            <h1 className="text-xl text-black">
              Have a question or want to get involved?
            </h1>
            <Link to="/contact" className="text-lg cursor-pointer w-full">
              <div className="mt-4 bg-orange-600 hover:bg-orange-700 transition px-2 py-1 text-center rounded">
                Contact us
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-green-300/40 pt-4 pb-2 text-center text-sm">
        &copy; 2025 Agyenim Boateng Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
