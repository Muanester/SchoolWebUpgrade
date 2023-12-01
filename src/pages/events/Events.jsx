import React from "react";
import "./Events.css";
import HeadCard from "../../components/headcard/HeadCard";
import {
  ItemCategories,
  ItemCategoryLinks,
} from "../../components/categories/Categories";
import events_categories from "./EventsCategories";

function Events() {
  const getEventLink = (eventNumber) => {
    const eventIndex = eventNumber - 1;
    const eventKey = `event${eventNumber}`;
    return events_categories[eventIndex][eventKey]?.link || null;
  };

  const getEventTitle = (eventNumber) => {
    const eventIndex = eventNumber - 1;
    const eventKey = `event${eventNumber}`;
    return events_categories[eventIndex][eventKey]?.title || null;
  };

  return (
    <>
      <HeadCard title="Our Events /" />
      <section className="categories">
        <div className="categories_items">
          {events_categories.map((category, index) => (
            <ItemCategories
              key={index}
              image={category[`event${index + 1}`].image}
              title={category[`event${index + 1}`].title}
              description={category[`event${index + 1}`].description}
              link={category[`event${index + 1}`].link}
            />
          ))}
        </div>

        <ItemCategoryLinks
          head="Events:"
          link1={getEventLink(1)}
          title1={getEventTitle(1)}
          link2={getEventLink(2)}
          title2={getEventTitle(2)}
          link3={getEventLink(3)}
          title3={getEventTitle(3)}
          link4={getEventLink(4)}
          title4={getEventTitle(4)}
          link5={getEventLink(5)}
          title5={getEventTitle(5)}
          link6={getEventLink(6)}
          title6={getEventTitle(6)}
          link7={getEventLink(7)}
          title7={getEventTitle(7)}
        />
      </section>
    </>
  );
}

export default Events;
