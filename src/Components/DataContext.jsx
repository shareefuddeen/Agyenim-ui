import { useState, createContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {

const api_url = import.meta.env.VITE_API_URL
const [announcements,setAnnouncements] = useState([]);

  useEffect(()=>{
    const fetchBlog =async()=>{
      try {
        const response = await axios.get(`${api_url}/announcements/`)
        console.log(response.data);
        setAnnouncements(response.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchBlog()
  },[])

    return (
        <DataContext.Provider value={{ announcements }}>
            {children}
        </DataContext.Provider>
    );
};
export { DataContext, DataProvider };
