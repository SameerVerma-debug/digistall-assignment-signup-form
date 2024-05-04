import { useContext } from "react"
import { FormContext } from "../App"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Email = () => {
  const {formData,setFormData} = useContext(FormContext);
  const schema = yup.object().shape({
    email: yup.string().required("Email is Required").email("Enter a Valid Email")
  })

  const{register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });

  const submitEmail = (data) => {
    setFormData({
      ...formData,
      email:data.email
    })
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submitEmail)}>
        <div className="form-field">
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" {...register("email")}/>
        </div>
        {errors.email && <p className="form-error">{errors.email.message}</p>}
        <button className="form-button">Continue</button>
      </form>
    </div>
  )
}