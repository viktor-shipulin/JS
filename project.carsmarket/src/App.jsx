import AddCar from "./components/AddCar";
import CarList from "./components/CarList";
import FilterCars from "./components/FilterCars";

// главный экран 
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Автомобильный Маркетплейс</h1>
      <AddCar />      {/*добавление */}
      <hr />
      <FilterCars />  {/*поиск */}
      <CarList />     {/*список */}
    </div>
  );
}

export default App;


