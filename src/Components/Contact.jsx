import { useState } from "react";
import logo from "../images/Agyenim logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Contact = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !values.name ||
            !values.email ||
            !values.phonenumber ||
            !values.message
        ) {
            alert("All fields must be filled");
            return;
        }
        try {
            const api_url = import.meta.env.VITE_API_URL
            const response = await axios.post(
                `${api_url}/contact/`,
                values,
            );
            console.log(response);
            alert("Message sent!");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Message not sent.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-200 flex flex-col items-center px-auto justify-center">
                <form
                    method="POST"
                    onSubmit={handleSubmit}
                    className="w-[26em] max-w-xl bg-gray-100 shadow-lg my-12 lg:my-0 hover:shadow-xl transition duration-500 rounded-lg py-12 px-8 flex flex-col items-center gap-6 "
                >
                    <a href="/" className="flex justify-center gap-4 items-center">
                        <img
                            src={logo}
                            loading="lazy"
                            className="rounded-full"
                            width={46}
                            height={46}
                            alt="Logo"
                        />
                        <h1 className="font-bold">Agyenim Boateng</h1>
                    </a>
                    <h1 className="text-lg font-bold tracking-wide text-yellow-800 text-center">
                        Join and be part of this organization
                    </h1>

                    <div className="relative w-full">
                        <input
                            required
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Full Name"
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>

                    <div className="relative w-full">
                        <input
                            required
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>

                    <div className="relative w-full">
                        <input
                            required
                            id="phone"
                            name="phonenumber"
                            value={values.phonenumber}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Enter Phonenumber"
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>

                    <div className="relative w-full">
                        <textarea
                            required
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            rows={4}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="transition duration-300 hover:scale-105 bg-gradient-to-br from-orange-400 to-orange-600 px-3 py-2 text-white text-lg font-bold rounded-md"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;
