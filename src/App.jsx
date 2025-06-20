import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLenis from "./Lenis";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Announcement from "./Components/Announcement";
import AnnouncementDetail from "./Components/Announcement-detail.jsx";
import { DataProvider } from "./Components/DataContext.jsx";

function App() {
  useLenis();
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DataProvider>
                <Home />
              </DataProvider>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route
            path="/announcement-details"
            element={
                <AnnouncementDetail />
            }
          ></Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
