import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Departments from "./pages/departments/Departments";
import About from "./pages/about/About";
import Events from "./pages/events/Events";
import Contact from "./pages/contact/Contact";
import DepartmentItem from "./pages/departmentitem/DepartmentItem";
import EventItem from "./pages/eventitem/EventItem";
import Tenders from "./pages/tenders/Tenders";
import Gallery from "./pages/gallery/Gallery";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/departments/mathematics"
          element={<DepartmentItem category={"mathematics"} />}
        />
        <Route
          path="/departments/languages"
          element={<DepartmentItem category={"languages"} />}
        />
        <Route
          path="/departments/sciences"
          element={<DepartmentItem category={"sciences"} />}
        />
        <Route
          path="/departments/humanities"
          element={<DepartmentItem category={"humanities"} />}
        />
        <Route
          path="/departments/business"
          element={<DepartmentItem category={"business"} />}
        />
        <Route
          path="/departments/electives"
          element={<DepartmentItem category={"electives"} />}
        />
        <Route
          path="/departments/sciences"
          element={<DepartmentItem category={"sciences"} />}
        />

        <Route
          path="/events/clubs"
          element={<EventItem category={"clubs"} />}
        />
        <Route
          path="/events/sports"
          element={<EventItem category={"sports"} />}
        />
        <Route
          path="/events/entertainment"
          element={<EventItem category={"entertainment"} />}
        />
        <Route
          path="/events/prayers"
          element={<EventItem category={"prayers"} />}
        />
        <Route
          path="/events/otherevents"
          element={<EventItem category={"otherevents"} />}
        />

        <Route path="/events/tenders" element={<Tenders />} />
        <Route path="/events/gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  );
}

export default App;
