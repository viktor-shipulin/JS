import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTodoById, updateTodo, clearSelected } from "../features/todos/todosSlice";

const TodoDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedTodo } = useSelector(state => state.todos);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedTodo) setTitle(selectedTodo.title);
  }, [selectedTodo]);

  const handleSave = () => {
    dispatch(updateTodo({ ...selectedTodo, title }));
    navigate("/todos");
  };

  if (!selectedTodo) return <p>Загрузка...</p>;

  return (
    <div className="container">
      <button className="btn-back" onClick={() => { dispatch(clearSelected()); navigate("/todos"); }}>
        ← Назад
      </button>
      <h2>Задача #{selectedTodo.id}</h2>
      <input
        className="detail-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="btn-save" onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default TodoDetail;