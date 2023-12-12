import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

let visit_more_items = [
  {
    icon: FaChalkboardTeacher,
    title: "School Admin",
    description:
      "Committed to advocacy and leadership, we work collaboratively to enhance the student experience and foster unity.",
    link: "/admin",
  },
  {
    icon: GrGallery,
    title: "Our Gallery",
    description:
      "From academic achievements to artistic endeavors, it reflects the diverse talents and accomplishments that define our school community. ",
    link: "/events/gallery",
  },
  {
    icon: FaBuilding,
    title: "About Our School",
    description:
      "Welcome to Ngoleni Secondary School, a beacon of educational excellence.",
    link: "/about",
  },
  {
    icon: FaPuzzlePiece,
    title: "Clubs & Societies",
    description:
      "Students explore diverse interests, fostering teamwork, leadership, and personal development.",
    link: "/events/clubs",
  },
  {
    icon: MdOutlineSportsVolleyball,
    title: "Sports & Activities",
    description:
      "From team sports to individual pursuits, students engage in a diverse range of activities promoting fitness and teamwork.",
    link: "/events/sports",
  },
];

export default visit_more_items;
