import React from "react";
import "./SchoolCouncil.css";
import {
  ItemDetailCard_ImgL,
  ItemDetailCard_ImgR,
} from "../../components/itemdetailcard/ItemDetailCard";
import SchCaptain from "../../assets/captain.JPG";
import DepCaptain from "../../assets/depCaptain.JPG";
import StudCouncil from "../../assets/studCouncil.JPG";

function StudentCouncil() {
  return (
    <div>
      <div className="school_council">
        <h2>Student Council:</h2>
        <ItemDetailCard_ImgL
          image={SchCaptain}
          title="James - School Captain"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link="/about"
        />

        <ItemDetailCard_ImgR
          image={DepCaptain}
          title="July - School Deputy Captain"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link="/about"
        />

        <ItemDetailCard_ImgL
          image={StudCouncil}
          title="Student's Council"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link="/about"
        />
      </div>
    </div>
  );
}

export default StudentCouncil;
