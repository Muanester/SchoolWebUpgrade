import React from "react";
import "./Admin.css";
import AdminCouncil from "../../components/schoolcouncil/AdminCouncil";
import StudentCouncil from "../../components/schoolcouncil/StudentCouncil";

function Admin() {
  return (
    <section className="admin">
      <AdminCouncil link={false} />
      <StudentCouncil link={false} />
    </section>
  );
}

export default Admin;
