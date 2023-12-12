import React from "react";
import "./SchoolCouncil.css";
import {
  ItemDetailCard_ImgL,
  ItemDetailCard_ImgR,
} from "../../components/itemdetailcard/ItemDetailCard";
import PrincipalImg from "../../assets/principal.JPG";
import DepPrincipalImg from "../../assets/depPrincipal.JPG";
import SnrTeacher from "../../assets/seniorTeacher.JPG";

function AdminCouncil(props) {
  return (
    <div>
      <div className="school_council">
        <h2>Our Admin:</h2>
        <ItemDetailCard_ImgL
          image={PrincipalImg}
          title="Madam Margaret Mutie - Principal"
          text="As the proud Principal of Ngoleni Secondary School, I am honored to lead a dynamic community committed to academic excellence and holistic development. At Ngoleni, we prioritize a nurturing environment, equipping students with skills for success. Our dedicated staff, state-of-the-art facilities, and vibrant extracurricular activities ensure a transformative educational experience. Join us on this journey of growth and achievement at Ngoleni Secondary School."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgR
          image={DepPrincipalImg}
          title="James - Deputy Principal"
          text="Ngoleni Secondary School is a place of growth and opportunity. As Deputy Principal, I'm dedicated to fostering a supportive learning environment where students thrive academically and personally. We prioritize holistic development, encouraging curiosity and critical thinking. With a strong emphasis on values and collaboration, Ngoleni prepares students for a future of success. Welcome to a school where every student's journey matters."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgL
          image={SnrTeacher}
          title="Madam - Senior Teacher"
          text="At Ngoleni Secondary School, we believe in shaping well-rounded individuals. As the Senior Teacher, I am proud to contribute to an environment that values academic excellence, character development, and inclusivity. Our commitment to quality education ensures students receive a comprehensive learning experience that prepares them for the challenges of the future. Welcome to Ngoleni, where every student's potential is nurtured."
          link={props.link ? "/admin" : ""}
        />
      </div>
    </div>
  );
}

export default AdminCouncil;
