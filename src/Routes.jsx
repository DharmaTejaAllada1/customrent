import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Frame1131 = React.lazy(() => import("pages/Frame1131"));
const DesktopThirteen = React.lazy(() => import("pages/DesktopThirteen"));
const DesktopTwelve = React.lazy(() => import("pages/DesktopTwelve"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwelve" element={<DesktopTwelve />} />
          <Route path="/desktopthirteen" element={<DesktopThirteen />} />
          <Route path="/frame1131" element={<Frame1131 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
