import { useState, createContext, useEffect } from "react";
import axios from "axios";
import useSwr from "swr"

const DataContext = createContext();

const DataProvider = ({ children }) => {

const api_url = import.meta.env.VITE_API_URL
const fetcher = url => axios.get(url).then(res => res.data)

const {data:announcements} = useSwr(`${api_url}/announcements/`,fetcher,{
    dedupingInterval:6000000,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
})

    return (
        <DataContext.Provider value={{ announcements }}>
            {children}
        </DataContext.Provider>
    );
};
export { DataContext, DataProvider };
