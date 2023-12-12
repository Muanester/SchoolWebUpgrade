import React from "react";
import "./About.css";
import HeadCard from "../../components/headcard/HeadCard";
import AdminCouncil from "../../components/schoolcouncil/AdminCouncil";
import StudentCouncil from "../../components/schoolcouncil/StudentCouncil";
import AboutFeatures from "../../components/aboutfeatures/AboutFeatures";

function About() {
  return (
    <>
      <HeadCard title="About Our School /" />
      <section id="about">
        <div className="about-text">
          <h3>Our History:</h3>
          <p>
            Welcome to Ngoleni Secondary School, a beacon of educational
            excellence under the able leadership of Principal Margaret Mutie.
            Nestled in the picturesque landscape of Kathiani Sub-County,
            Machakos County, our school stands as a testament to a commitment to
            holistic learning.
            <br />
            <br />
            Ngoleni Secondary School is a Mixed Day and Boarding institution,
            catering to the diverse needs of students. Led by Principal Margaret
            Mutie, our school is dedicated to providing a nurturing environment
            for both boys and girls. With a focus on academic achievement,
            character development, and extracurricular engagement, Ngoleni is
            more than an educational institution; it's a community that fosters
            growth and exploration.
            <br />
            <br />
            At the heart of our educational approach are dedicated departments
            that cater to a wide range of disciplines. In the Science and
            Mathematics departments, students engage in rigorous academic
            pursuits, developing analytical and problem-solving skills that
            prepare them for future challenges. Our Humanities department
            emphasizes critical thinking, encouraging students to explore and
            understand the world around them.
            <br />
            <br />
            Beyond academics, Ngoleni Secondary School places a strong emphasis
            on the Arts and Sports departments. Here, creativity is celebrated,
            and teamwork is instilled through various artistic endeavors and
            athletic activities. These departments contribute to a well-rounded
            education, nurturing not only the mind but also the spirit.
            <br />
            <br />
            Ngoleni Secondary School operates at the Sub-County level,
            reflecting our commitment to providing quality education accessible
            to the local community. Our status as both a Day and Boarding school
            ensures flexibility for students, allowing them to choose an
            educational model that aligns with their needs and preferences.
            <br />
            <br />
            Our school is equipped with state-of-the-art facilities, providing a
            conducive environment for learning and personal development. We
            believe in empowering our students to reach their full potential,
            preparing them for higher education and the challenges of the
            future.
            <br />
            <br />
            Ngoleni Secondary School invites students and parents alike to
            embark on a journey of discovery and growth. With Principal Margaret
            Mutie at the helm, our school is not just an institution but a
            community where every student is valued, supported, and encouraged
            to excel in academics and beyond. Welcome to Ngoleni, where
            education meets inspiration!
            <br />
            <br />
          </p>
        </div>

        <AdminCouncil link={true} />
        <StudentCouncil link={true} />
        <AboutFeatures />
      </section>
    </>
  );
}

export default About;
