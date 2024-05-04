import { useContext } from "react"
import { FormContext } from "../App"
import { Message } from "./Message";
import { Email } from "./Email";
import { Name } from "./Name";

export const Main = () => {
  const {formData} = useContext(FormContext);

  if(formData.name && formData.email){
    return <Message/>
  }

  if(formData.name){
    return <Email/>
  }

  return (
    <>
    <Name/>
    </>
  )
}