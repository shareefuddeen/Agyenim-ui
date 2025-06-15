import { useContext } from "react";
import { DataContext } from "./DataContext";
import Navbar from "../Components/Navbar";

const AnnouncementDetail = () => {
	const { announcements } = useContext(DataContext);

	return (
		<>
			<Navbar />
			<section
				id="announcement"
				className="min-h-screen bg-white py-10 px-4 md:px-8"
			>
				<div className="max-w-4xl mx-auto">
					{announcements && announcements.length > 0 ? (
						<div className="space-y-6">
							{announcements.map((item, index) => (
								<div
									key={index}
									className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition duration-300"
								>
									<h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
										{item.title}
									</h3>
									<p className="text-sm md:text-base text-gray-700 leading-relaxed">
										{item.content}
									</p>
								</div>
							))}
						</div>
					) : (
						<p className="text-gray-500 text-center">
							No announcements available at the moment.
						</p>
					)}
				</div>
			</section>
		</>
	);
};

export default AnnouncementDetail;
