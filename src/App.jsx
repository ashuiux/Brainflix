import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
