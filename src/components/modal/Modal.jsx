import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <div className="close_modal"></div>
        <img src={props.image} alt="" />
        <div className="modal_det">
          <h6>{props.name}</h6>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
