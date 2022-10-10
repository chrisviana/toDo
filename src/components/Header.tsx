import todoLogo from "../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  adicionarTarefa: (title: string) => void;
}

export function Header({ adicionarTarefa }: Props) {
  const [title, setTitle] = useState("");

  function handleAdicionarTarefa(event: FormEvent) {
    event.preventDefault();
    adicionarTarefa(title);
    setTitle("");
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleAdicionarTarefa}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          onChange={handleChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
