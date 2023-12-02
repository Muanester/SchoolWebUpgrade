import React from "react";
import "./EventItem.css";
import {
  ItemDetailCard_ImgL,
  ItemDetailCard_ImgR,
} from "../../components/itemdetailcard/ItemDetailCard";
import event_items_list from "./EventItemList";

function EventItem(props) {
  return (
    <section className="event_item">
      {event_items_list.map((item, index) => {
        if (props.category === item.event_category) {
          return (
            <div key={index} className="event_item-wrap">
              <div className="event_item-img">
                <img src={item.event_image} alt="" />
              </div>
              <div className="event_item-head">
                <div className="event_item-name">
                  <h3>{item.event_title}</h3>
                  <p>{item.event_title_desc}</p>
                </div>
              </div>
              <h4>Instructor</h4>
              <div className="instructor">
                <img src={item.event_instructor_img} alt="" />
                <div className="instructor-det">
                  <h4>{item.event_instructor_name}</h4>
                </div>
              </div>
              <hr />
              <h3>
                {item.event_title} {""} Overview
              </h3>
              <p>{item.event_description}</p>
              <hr />

              <div className="event_items-list">
                {item.event_type.map((event, index) => {
                  if (index % 2 === 0) {
                    return (
                      <ItemDetailCard_ImgL
                        key={index}
                        image={event.type_image}
                        title={event.type_title}
                        text={event.type_text}
                      />
                    );
                  } else {
                    return (
                      <ItemDetailCard_ImgR
                        key={index}
                        image={event.type_image}
                        title={event.type_title}
                        text={event.type_text}
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}

export default EventItem;
