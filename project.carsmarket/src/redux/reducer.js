import { carsDB } from "../database/carsDB";

// только список машин и поле для поиска плюс меняем данные в магазине 
const startData = [
  { id: 1, name: "Toyota", cost: 15000 },
  { id: 2, name: "BMW", cost: 25000 }
];

export const rootReducer = (state = { cars: startData }, action) => {
  if (action.type === "ADD") {
    return { ...state, cars: [...state.cars, action.payload] };
  }
  if (action.type === "DEL") {
    return { ...state, cars: state.cars.filter(c => c.id !== action.payload) };
  }
  return state;
};