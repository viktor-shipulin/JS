import { useDispatch } from "react-redux";

//  авторизации
export default function Login() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch({ type: "LOGIN" })}>Войти</button>;
}