import { useDispatch } from "react-redux";

// добавляем машины
export default function AddCar() {
  const dispatch = useDispatch();
  
  const handleAdd = () => {
    const newCar = { id: Date.now(), brand: "New Car", price: 10000 };
    dispatch({ type: "ADD_CAR", payload: newCar });
  };

  return <button onClick={handleAdd}>Выставить машину на продажу</button>;
}