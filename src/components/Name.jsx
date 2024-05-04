import { useContext } from "react"
import { FormContext } from "../App"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/form.css"

export const Name = () => {
  const {formData,setFormData} = useContext(FormContext);
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required").min(4,"Name should be of 4 letters minimum")
  })

  const{register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });

  const submitName = (data) => {
    setFormData({
      ...formData,
      name:data.name
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submitName)}>
        <div className="form-field">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" {...register("name")}/>
        </div>
        {errors.name && <p className="form-error">{errors.name.message}</p>}
        <button className="form-button">Continue</button>
      </form>
    </div>
  )
}