import { useSelector, useDispatch } from "react-redux";

// все машины и  удаление
export default function CarList() {
  const cars = useSelector(state => state.cars);
  const dispatch = useDispatch();

  return (
    <div>
      {cars.map(car => (
        <div key={car.id}>
          <span>{car.brand} — ${car.price} </span>
          <button onClick={() => dispatch({ type: "DELETE_CAR", payload: car.id })}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}