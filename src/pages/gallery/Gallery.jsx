import React, { useState } from "react";
import "./Gallery.css";
import Modal from "../../components/modal/Modal";
import PersonCard from "../../components/personcard/PersonCard";
import {
  admin_staff,
  student_council,
  other_staff,
  other_events,
  school_pics,
} from "./GalleryItems";

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const openModal = (image, name, title) => {
    setSelectedImage(image);
    setSelectedName(name);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          image={selectedImage}
          name={selectedName}
          title={selectedTitle}
          onClose={closeModal}
        />
      )}
      <section className="gallery">
        <div className="gallery_section">
          <h2>Our Admin:</h2>

          <div className="person_card_list">
            {admin_staff.map((staff, index) => (
              <PersonCard
                key={index}
                image={staff.image}
                name={staff.name}
                title={staff.title}
                onClick={() => openModal(staff.image, staff.name, staff.title)}
                gallery={true}
              />
            ))}
          </div>
        </div>

        <div className="gallery_section">
          <h2>Student Council:</h2>

          <div className="person_card_list">
            {student_council.map((student, index) => (
              <PersonCard
                key={index}
                image={student.image}
                name={student.name}
                title={student.title}
                onClick={() =>
                  openModal(student.image, student.name, student.title)
                }
                gallery={true}
              />
            ))}
          </div>
        </div>

        <div className="gallery_section">
          <h2>Other Staff:</h2>

          <div className="person_card_list">
            {other_staff.map((staff, index) => (
              <PersonCard
                key={index}
                image={staff.image}
                name={staff.name}
                title={staff.title}
                onClick={() => openModal(staff.image, staff.name, staff.title)}
                gallery={true}
              />
            ))}
          </div>
        </div>

        <div className="gallery_section">
          <h2>School Pictures:</h2>

          <div className="person_card_list">
            {school_pics.map((item, index) => (
              <PersonCard
                key={index}
                image={item.image}
                name={item.name}
                title={item.title}
                onClick={() => openModal(item.image, item.name, item.title)}
                gallery={true}
              />
            ))}
          </div>
        </div>

        <div className="gallery_section">
          <h2>Other Events:</h2>

          <div className="person_card_list">
            {other_events.map((event, index) => (
              <PersonCard
                key={index}
                image={event.image}
                name={event.name}
                title={event.title}
                onClick={() => openModal(event.image, event.name, event.title)}
                gallery={true}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
