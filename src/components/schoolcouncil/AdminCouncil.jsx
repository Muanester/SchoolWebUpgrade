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
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgR
          image={DepPrincipalImg}
          title="James - Deputy Principal"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link={props.link ? "/admin" : ""}
        />

        <ItemDetailCard_ImgL
          image={SnrTeacher}
          title="Madam - Senior Teacher"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dignissimos asperiores aliquid ullam laboriosam veritatis incidunt
iste itaque tempore similique veniam?Lorem ipsum dolor sit amet
consectetur adipisicing elit. Adipisci quis est perspiciatis
numquam tempore dolorem totam magnam recusandae consequatur
fugiat."
          link={props.link ? "/admin" : ""}
        />
      </div>
    </div>
  );
}

export default AdminCouncil;
