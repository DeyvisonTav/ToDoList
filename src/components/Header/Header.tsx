
import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState, useRef } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  const letterInputRef = useRef(null as any)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
    letterInputRef.current.focus()
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    
    <header className={styles.header}>
      <img src='./src/assets/todolist.svg' />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
          ref={letterInputRef}
        />
        <button >
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}