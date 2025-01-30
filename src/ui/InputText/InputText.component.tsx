import style from "./InputText.module.css";

type InputTextProps = {
  onChange: (text: string) => void;
};

function InputText({ onChange}: InputTextProps) {
  return (
    <input 
      type="text" 
      placeholder="Ingresar tarea..."
      onChange={(event) => onChange(event.target.value)}
      className={`${style.container}`}
    />
  )
}

export default InputText
