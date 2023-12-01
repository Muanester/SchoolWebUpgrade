import React from "react";
import "./Departments.css";
import HeadCard from "../../components/headcard/HeadCard";
import {
  ItemCategories,
  ItemCategoryLinks,
} from "../../components/categories/Categories";
import departments_categories from "./DepartmentsCategories";

function Departments() {
  const getDepartmentLink = (departmentNumber) => {
    const departmentIndex = departmentNumber - 1;
    const departmentKey = `department${departmentNumber}`;
    return departments_categories[departmentIndex][departmentKey]?.link || null;
  };

  const getDepartmentTitle = (departmentNumber) => {
    const departmentIndex = departmentNumber - 1;
    const departmentKey = `department${departmentNumber}`;
    return (
      departments_categories[departmentIndex][departmentKey]?.title || null
    );
  };

  return (
    <>
      <HeadCard title="Our Departments /" />
      <section className="categories">
        <div className="categories_items">
          {departments_categories.map((category, index) => (
            <ItemCategories
              key={index}
              image={category[`department${index + 1}`].image}
              title={category[`department${index + 1}`].title}
              description={category[`department${index + 1}`].description}
              link={category[`department${index + 1}`].link}
            />
          ))}
        </div>

        <ItemCategoryLinks
          head="Departments:"
          link1={getDepartmentLink(1)}
          title1={getDepartmentTitle(1)}
          link2={getDepartmentLink(2)}
          title2={getDepartmentTitle(2)}
          link3={getDepartmentLink(3)}
          title3={getDepartmentTitle(3)}
          link4={getDepartmentLink(4)}
          title4={getDepartmentTitle(4)}
          link5={getDepartmentLink(5)}
          title5={getDepartmentTitle(5)}
          link6={getDepartmentLink(6)}
          title6={getDepartmentTitle(6)}
          link7={getDepartmentLink(7)}
          title7={getDepartmentTitle(7)}
        />
      </section>
    </>
  );
}

export default Departments;
