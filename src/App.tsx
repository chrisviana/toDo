import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface Tarefa {
  id: string;
  title: string;
  status: boolean;
}

function App() {
  const [tarefas, setTarefa] = useState<Tarefa[]>([]);

  function adicionarTarefa(title: string) {
    setTarefa([
      ...tarefas,
      {
        title: title,
        status: false,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function deletarTarefa(id: string) {
    const novaTarefa = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefa(novaTarefa);
  }

  return (
    <>
      <Header adicionarTarefa={adicionarTarefa} />
      <Tasks tarefas={tarefas} deletarTarefa={deletarTarefa} />
    </>
  );
}

export default App;
