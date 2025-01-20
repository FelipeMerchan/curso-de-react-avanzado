import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const emojiMap: { [key: string]: string } = {
  eat: "🍔",
  sleep: "🛌",
  exercise: "🏋🏼‍♀️",
};

export const TodoList: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLowerCase()] || todoText;
    if (mappedText.trim()) {
      addTodo(mappedText);
      setTodoText("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <em>Made with Zustand</em>
      <h1>Emoji TodoList</h1>
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder="Add a new todo"
        onKeyDown={handleKeyDown}
      />
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id} onClick={() => removeTodo(id)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
