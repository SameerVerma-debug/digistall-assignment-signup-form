import { useContext } from "react";
import { FormContext } from "../App";

export const Modal = () => {
  const { formData } = useContext(FormContext);
  return (
    <div>
      <div className="modal-content">
        {Object.keys(formData).map((prop) => {
          return (
            <p key={prop}>
              <span style={{ fontWeight: "bold" }}>
                {prop[0].toUpperCase() + prop.slice(1)}
              </span>
              : {formData[prop]}
            </p>
          );
        })}
      </div>
    </div>
  );
};
 0