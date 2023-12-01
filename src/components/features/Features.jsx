import React from "react";
import "./Features.css";
import StudentFeature from "../studentfeature/StudentFeature";
import features_items from "./FeaturesItems";

function Features() {
  return (
    <section id="features">
      <h2>STUDENTS' LIFE</h2>
      <h3>Learning And Extra-Curricular Fun:</h3>
      <div className="features_items">
        {features_items.map((item, index) => (
          <StudentFeature
            key={index}
            image={item.fe_img}
            title={item.fe_title}
            link={item.fe_link}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
