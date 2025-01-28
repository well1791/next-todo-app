import Image from "next/image";
import styles from "./page.module.css";
import InputText from "~/ui/InputText";
import BtnAdd from "~/ui/BtnAdd";


export default function Home() {
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <InputText onChange={(text) => {
          console.log(text);
        }}/>
      </div>
      <div>
        <BtnAdd className="btn-class">Enviar</BtnAdd>
      </div>
    </div>
  );
}
