'use client'

import Image from "next/image";
import styles from "./page.module.css";
import InputText from "~/ui/InputText";
import BtnAdd from "~/ui/BtnAdd";

export default function Home() {
  return (
    <div className={styles["todo-list"]}>
      <h1>To Do List</h1>
      <div className={styles["todo-list-inputText"]}>
        <InputText onChange={(text) => {
          console.log(text);
        }}/>
      </div>
      <div>
        <BtnAdd>Enviar</BtnAdd>
      </div>
    </div>
  );
}
