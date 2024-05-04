import { createContext } from "react";
import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";

export const FormContext = createContext();

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <div className="app">
        <div>
          <h1>DigiStall Assignment</h1>
          <p>By Sameer Verma(sameerv314@gmail.com, 9888188794)</p>
        </div>
        <Main />
      </div>
    </FormContext.Provider>
  );
}

export default App;
