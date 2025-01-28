type InputTextProps = {
  onChange: (text: string) => void;
};

function InputText({ onChange}: InputTextProps) {
  return (
    <input 
      type="text" 
      placeholder="Ingresar tarea..."
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default InputText
