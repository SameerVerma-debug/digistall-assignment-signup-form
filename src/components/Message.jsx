import { useContext, useRef } from "react";
import { FormContext } from "../App";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/modal.css";
import { Modal } from "./Modal";

export const Message = () => {
  const { formData, setFormData } = useContext(FormContext);
  const modalRef = useRef(null);

  const schema = yup.object().shape({
    message: yup
      .string()
      .required("Message is Required")
      .test('maxWords','Mesaage should not have more than 50 Words',val => {
        const message = val.trim().split(/\s+/);
        return message.length <= 50
      })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitmessage = (data) => {
    setFormData({
      ...formData,
      message: data.message,
    });

    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submitmessage)}>
        <div className="form-field">
          <label htmlFor="message">Message: </label>
          <textarea id="message" {...register("message")} />
        </div>
        {errors.message && (
          <p className="form-error">{errors.message.message}</p>
        )}
        <button className="form-button">Submit</button>
      </form>

      <dialog className="modal" ref={modalRef}>
        <Modal />
        <button onClick={closeModal} className="modal-close-button">
          X
        </button>
      </dialog>
    </div>
  );
};
