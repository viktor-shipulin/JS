import { useDispatch } from "react-redux";

// фильтр
export default function FilterCars() {
  const dispatch = useDispatch();
  return (
    <input 
      placeholder="Поиск по марке..." 
      onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
    />
  );
}