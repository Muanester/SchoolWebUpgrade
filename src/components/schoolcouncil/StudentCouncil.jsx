import React from "react";
import "./SchoolCouncil.css";
import {
  ItemDetailCard_ImgL,
  ItemDetailCard_ImgR,
} from "../../components/itemdetailcard/ItemDetailCard";
import SchCaptain from "../../assets/captain.JPG";
import DepCaptain from "../../assets/depCaptain.JPG";
import StudCouncil from "../../assets/studCouncil.JPG";

function StudentCouncil(props) {
  return (
    <div>
      <div className="school_council">
        <h2>Student Council:</h2>
        <ItemDetailCard_ImgL
          image={SchCaptain}
          title="James - School Captain"
          text="Ngoleni Secondary School is more than a campus; it's a vibrant community of learners. As School Captain, I'm privileged to witness the collective spirit of ambition and camaraderie. Our diverse student body, engaging activities, and supportive staff foster an environment where everyone's voice is heard. Ngoleni is where dreams take flight, and every student is part of the journey."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgR
          image={DepCaptain}
          title="July - School Deputy Captain"
          text="Ngoleni Secondary School embodies unity and growth. Serving as Deputy School Captain, I'm inspired by the collaborative ethos that defines our community. We celebrate diversity and encourage each student's unique journey. With dedicated teachers and enriching activities, Ngoleni is more than a school—it's a family where everyone plays a vital role in shaping our shared success. Welcome to a place of belonging and achievement."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgL
          image={StudCouncil}
          title="Student's Council"
          text="As the Student Council, we proudly represent the vibrant spirit of Ngoleni Secondary School. Our focus is on advocating for student needs and fostering a sense of community. Ngoleni is a place where student voices are heard, ideas flourish, and leadership is nurtured. Join us in making our school experience even more enriching and memorable. Together, we shape the future at Ngoleni!"
          link={props.link ? "/admin" : ""}
        />
      </div>
    </div>
  );
}

export default StudentCouncil;
