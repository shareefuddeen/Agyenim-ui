import { useState, createContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const api_url = import.meta.env.VITE_API_URL
            try {
                const response = await axios.get(
                    `${api_url}/announcements/`
                );
                setAnnouncements(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, []);

    return (
        <DataContext.Provider value={{ announcements, setAnnouncements }}>
            {children}
        </DataContext.Provider>
    );
};
export { DataContext, DataProvider };
