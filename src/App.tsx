import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import IndexPage from "./pages/IndexPage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/:id" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
