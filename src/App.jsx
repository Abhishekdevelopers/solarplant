import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Technicalreport from "./Pages/Technicalreport";
import Description from "./Pages/Description ";
import Projectdevelopment from "./Pages/Projectdevelopment";
import Projectmanagement from "./Pages/Projectmanagement";
import Originationmediation from "./Pages/Originationmediation";
import Safetycommissioning from "./Pages/Safetycommission";
import Yieldestimation from "./Pages/Yieldestimation";
import Companydiscription from "./Pages/Companydiscription";
import Landorigination from "./Pages/Landorigination";
import Epcdetailed from "./Pages/Epcdetailed";
import Generalteams from "./Pages/Generalteams";
import Privacy from "./Pages/Privacy";
import GoToTop from "./Components/GoToTop";
const App = () => {
  return (
    <>
      <GoToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technical" element={<Technicalreport />}></Route>
          <Route path="/description" element={<Description />}></Route>
          <Route
            path="/projectdevelopment"
            element={<Projectdevelopment />}
          ></Route>
          <Route
            path="/projectmanagement"
            element={<Projectmanagement />}
          ></Route>
          <Route
            path="originationmediation"
            element={<Originationmediation />}
          ></Route>
          <Route
            path="safrtycommission"
            element={<Safetycommissioning />}
          ></Route>
          <Route path="yieldestimation" element={<Yieldestimation />}></Route>
          <Route
            path="companydiscripton"
            element={<Companydiscription />}
          ></Route>
          <Route path="landorigination" element={<Landorigination />}></Route>
          <Route path="Epcdetailed" element={<Epcdetailed />}></Route>
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/generalterms" element={<Generalteams />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
