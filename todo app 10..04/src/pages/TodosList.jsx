import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../features/todos/todosSlice";
import { useNavigate } from "react-router-dom";

const TodosList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector(state => state.todos);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(createTodo(title));
      setTitle("");
    }
  };

  const handleToggle = (todo) => {
    dispatch(updateTodo({ ...todo, done: !todo.done }));
  };

  if (status === "loading") return <p>Загрузка...</p>;

  return (
    <div className="container">
      <h2>Список</h2>

      <div className="input-row">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Новая задача..."
        />
        <button className="btn-add" onClick={handleAdd}>Добавить</button>
      </div>

      <ul>
        {items.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo)}
            />
            <span className={`todo-title ${todo.done ? "done" : ""}`}>
              {todo.title}
            </span>
            <button className="btn-open" onClick={() => navigate(`/todos/${todo.id}`)}>
              Открыть
            </button>
            <button className="btn-delete" onClick={() => dispatch(deleteTodo(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;