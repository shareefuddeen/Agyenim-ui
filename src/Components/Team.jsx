import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import useSwr from 'swr'

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      key={index}
      ref={ref}
      className="bg-white p-6 rounded-lg shadow text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
    >
      <img
        loading="lazy"
        src={`https://agyenim-api.onrender.com${member.image}`}
        alt={`${member.name} - ${member.title}`}
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-600">{member.name}</h3>
      <p className="text-gray-600 font-medium">{member.title}</p>
      <p className="mt-2 text-gray-700 text-sm">{member.description}</p>
    </motion.article>
  );
};

const Team = () => {

  const api_url = import.meta.env.VITE_API_URL;
  const fetcher = url => axios.get(url).then(res => res.data)

  const {data:team} = useSwr(`${api_url}/team/`,fetcher,{
    dedupingInterval:6000000,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
  })
    if (!Array.isArray(team)) return <p>No team data found.</p>

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-yellow-600 text-center my-4">
          Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
