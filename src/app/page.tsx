import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <InputText />
      </div>
      <div>
        <BtnAdd />
      </div>
    </div>
  );
}

const  InputText = () => {
  return (
    <input type="text" placeholder="Ingresar tarea..."></input>
  )
}


const BtnAdd = () => {
  return (
    <button type="button">Enviar</button>
  )
}