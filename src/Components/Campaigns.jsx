import React from "react";

const Campaigns = () => {
    return (
        <div className="relative min-h-screen lg:h-[500vh]">
            <section
                id="campaigns"
                className="h-screen flex font-serif flex-col text-white bg-blue-900 lg:p-16 p-8 justify-center items-center text-center"
            >
                <h1 className="text-4xl font-bold flex items-center space-x-2">
                    <span>Campaigns</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                        fill="currentColor"
                    >
                        <path d="M4 3h2v18H4V3zm3 2l10 3-10 3v-6zm0 8l10 3-10 3v-6z" />
                    </svg>
                </h1>
                <p className="text-2xl max-w-3xl mt-6 leading-9 tracking-wider">
                    At the Agyenim Boateng Foundation, our mission is to uplift
                    communities by addressing their most pressing needs. Our
                    campaigns are carefully designed to create long-term impact,
                    guided by our commitment to inclusivity and sustainability.
                </p>
            </section>

            <section className="absolute sticky top-0 z-0 min-h-screen flex flex-col rounded-3xl justify-center items-center bg-gray-200 text-black lg:p-12 p-8 text-center">
                <h1 className="lg:text-4xl text-2xl font-bold flex items-center space-x-2">
                    <span>Health for All</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="34"
                        fill="currentColor"
                    >
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 2.2.8 4.2 2 5.8L12 22l8-4.2c1.2-1.6 2-3.6 2-5.8 0-5.5-4.5-10-10-10zm1 10h3v2h-3v3h-2v-3H8v-2h3V9h2v3z" />
                    </svg>
                </h1>
                <div className="mt-6 lg:space-y-6 space-y-1 max-w-3xl">
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We believe that every person, no matter where they live,
                        deserves access to reliable and quality healthcare.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">Impact</h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        Through this campaign, we’ve renovated 3 CHPS compounds
                        and provided essential PPE kits and medical supplies,
                        benefitting over 5,000 community members in the Bono
                        East Region.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">
                        Next Steps
                    </h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We’re collaborating with local health professionals and
                        community leaders to organize free health screening days
                        in 5 rural communities—bringing preventive care closer
                        to those who need it most and fostering a culture of
                        proactive health management.
                    </p>
                </div>
            </section>

            <section className="absolute sticky top-0 z-10 min-h-screen flex flex-col rounded-3xl bg-yellow-600 text-white justify-center items-center lg:p-12 p-8 text-center">
                <h1 className="lg:text-4xl text-xl font-bold flex items-center space-x-2">
                    <span>Exercise Books for All</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4h14a2 2 0 0 1 2 2v14l-4-4H4V4zm2 2v10h10.17L18 18.17V6H6z" />
                    </svg>
                </h1>
                <div className="mt-6 lg:space-y-6 space-y-1 max-w-3xl">
                    <h2 className="lg:text-3xl text-xl font-bold">Impact</h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        Our campaign has delivered 10,000 exercise books and
                        20,000 learning kits to students in 15 rural schools,
                        ensuring they have the basic materials needed to thrive
                        in their studies.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">
                        Next Steps
                    </h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We’re joining forces with educators and digital literacy
                        advocates to roll out digital learning workshops in the
                        upcoming academic year. These workshops will introduce
                        students to basic computer skills and digital resources
                        to enhance their educational journey.
                    </p>
                </div>
            </section>

            <section className="absolute sticky top-0 z-20 min-h-screen flex flex-col rounded-3xl bg-red-900 text-white justify-center items-center lg:p-12 p-8 text-center">
                <h1 className="lg:text-4xl text-2xl font-bold flex items-center space-x-2">
                    <span>Community Outreach & Empowerment</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="34"
                        fill="currentColor"
                    >
                        <path d="M12 2a4 4 0 0 1 4 4c0 1.7-1 3.2-2.5 3.8V12h2v2h-2v2h2v2h-6v-2h2v-2h-2v-2h2V9.8A4 4 0 0 1 8 6a4 4 0 0 1 4-4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 16h12v2H6v-2zm0 4h12v2H6v-2z" />
                    </svg>
                </h1>
                <div className="mt-6 lg:space-y-6 space-y-1 max-w-3xl">
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        Communities thrive when they come together to learn,
                        grow, and support each other.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">Impact</h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        Our team has hosted 7 health education workshops and 5
                        community empowerment forums, reaching over 20,000
                        participants. These events create safe spaces for open
                        conversations, health education, and community-driven
                        solutions.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">
                        Next Steps
                    </h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We’re launching a “Healthy Living” series, focusing on
                        nutrition, sanitation, and preventive care, to inspire
                        healthier lifestyles and stronger families.
                    </p>
                </div>
            </section>

            <section className="absolute sticky top-0 z-30 min-h-screen flex flex-col rounded-3xl bg-black text-white justify-center items-center lg:p-12 p-8 text-center">
                <h1 className="lg:text-4xl text-2xl font-bold flex items-center space-x-2">
                    <span>Youth Development Programs</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="34"
                        fill="currentColor"
                    >
                        <circle cx="6" cy="10" r="2" />
                        <circle cx="12" cy="7" r="2" />
                        <circle cx="18" cy="10" r="2" />
                        <path d="M4 18c1-2 3-3 4-3s3 1 4 3h-8zM10 15c1-2 3-3 4-3s3 1 4 3h-8z" />
                    </svg>
                </h1>
                <div className="mt-6 lg:space-y-6 space-y-1 max-w-3xl">
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        Empowering youth is investing in the future.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">Impact</h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We’ve mentored over 200 young people through leadership
                        workshops, skills development sessions, and community
                        service opportunities, fostering self-confidence and a
                        spirit of entrepreneurship.
                    </p>
                    <h2 className="lg:text-3xl text-xl font-bold">
                        Next Steps
                    </h2>
                    <p className="lg:text-2xl text-xl leading-9 tracking-wider">
                        We’re excited to establish a youth innovation hub in
                        Techiman—a collaborative space that will offer training,
                        mentorship, and resources to help young leaders bring
                        their ideas to life and shape their communities for the
                        better.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Campaigns;
