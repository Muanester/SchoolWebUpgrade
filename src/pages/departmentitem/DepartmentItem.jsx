import React from "react";
import "./DepartmentItem.css";
import PersonCard from "../../components/personcard/PersonCard";
import department_item_list from "./DepartmentItemLists";

function DepartmentItem(props) {
  return (
    <section className="department_item">
      {department_item_list.map((item, index) => {
        if (props.category === item.dep_category) {
          return (
            <div key={index} className="department_item-block">
              <div className="department_item-img">
                <img src={item.dep_image} alt="" />
              </div>
              <h2>{item.dep_title}</h2>
              <p>{item.dep_description}</p>
              <hr />
              <h3>Department Staff:</h3>
              <div className="person_card_list">
                {item.dep_staff.map((staff, index) => (
                  <PersonCard
                    key={index}
                    image={staff.staff_image}
                    name={staff.staff_name}
                    title={staff.staff_title}
                  />
                ))}
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}

export default DepartmentItem;
