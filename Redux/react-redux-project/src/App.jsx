import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Информация обо мне</h1>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>Хобби:</strong> {user.hobbies.join(', ')}</p>
    </div>
  )
}

export default App