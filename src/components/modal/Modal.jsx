import React from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-wrap">
        <div className="modal-img">
          <div onClick={props.onClose} className="close_modal">
            <IoMdClose />
          </div>
          <img src={props.image} alt="" />
        </div>
        <div className="modal_det">
          <div>
            <h6>{props.name}</h6>
            <span>{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
