import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styles from "./Task.module.css";

import { Tarefa as ITarefa } from "../App";

interface Props {
  tarefa: ITarefa;
  deletarTarefa: (idTarefa: string) => void;
}

export function Task({ tarefa, deletarTarefa }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{tarefa.title}</p>

      <button
        className={styles.deleteButton}
        onClick={() => deletarTarefa(tarefa.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
