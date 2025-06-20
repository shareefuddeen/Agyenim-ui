import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Announcement = () => {
    const { announcements } = useContext(DataContext);

    return (
        <>
            <section
                id="announcement"
                className="bg-white py-10 px-4 md:px-8 min-h-[40vh]"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-yellow-600 text-center text-gray-800 mb-4">
                        Announcements
                    </h2>
                    <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
                        Stay up to date with the latest news, events, and
                        updates from the Agyenim Boateng Foundation!
                    </p>

                    {announcements && announcements.length > 0 ? (
                        <div className="space-y-4 md:space-y-6">
                            {announcements.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition duration-300"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-4">
                            No announcements available at the moment.
                        </p>
                    )}

                    <div className="text-center mt-6">
                        <Link
                            to="/announcement-details"
                            className="inline-block text-blue-600 hover:text-blue-800 font-medium transition"
                        >
                            See details
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Announcement;
