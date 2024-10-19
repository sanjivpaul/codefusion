import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import Sidebar from "./components/SideNav/Sidebar";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import { useSelector } from "react-redux";
import FeedbackPage from "./pages/Feedback/FeedbackPage";
import ContactPage from "./pages/Contact/ContactPage";
import CourcePage from "./pages/Cource/CourcePage";
import NotePage from "./pages/Notes/NotePage";
import CodeEditor from "./pages/IDE/CodeEditor";
import CourceDetails from "./pages/IDE/courceDetails/CourceDetails";
import CourceTopic from "./pages/Cource/CourceTopic";
import Array from "./pages/Cource/Array/Array";
import YoutubeVidePlayer from "./components/YoutubeVideoPlayer/YoutubeVidePlayer";
import PracticeQuestion from "./pages/PracticeQuestions/PracticeQuestion";
import LoginModal from "./pages/Login/LoginModal";
import { useEffect, useState } from "react";

function App() {
  const navCollapse = useSelector((state) => state.sidebar.showSidebar);

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 5000); // Wait for 1 second

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isModalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
      <div className={`app-container ${navCollapse ? "navCollapse" : ""}`}>
        <div className="sidebar-content">
          <Sidebar />
        </div>

        <div className="main-content">
          <div className="top-nav">
            <TopNav />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cource" element={<CourcePage />} />
            <Route path="/cource/topics" element={<CourceTopic />} />
            <Route path="/cource/topics/array" element={<Array />} />
            <Route path="/cource/details" element={<CourceDetails />} />
            <Route path="/cource/practice" element={<PracticeQuestion />} />
            <Route path="/note" element={<NotePage />} />
            <Route path="/ide" element={<CodeEditor />} />
            <Route path="/video-player" element={<YoutubeVidePlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
