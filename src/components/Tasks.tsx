import { useState } from "react";
import { Tarefa as ITarefa } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface Props {
  tarefas: ITarefa[];
  deletarTarefa: (idTarefa: string) => void;
}

export function Tasks({ tarefas, deletarTarefa }: Props) {
  const quantidadeTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.status).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{quantidadeTarefas}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {tarefasConcluidas} de {quantidadeTarefas}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tarefas.map((tarefa) => (
          <Task key={tarefa.id} tarefa={tarefa} deletarTarefa={deletarTarefa} />
        ))}
        {/* <section className={styles.empty}>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section> */}
      </div>
    </section>
  );
}
