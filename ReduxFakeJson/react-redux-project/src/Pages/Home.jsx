import { useSelector } from "react-redux";
import { useEffect, useState } from "react"; 
import "../styles/home.css";

const Home = () => {
    const theme = useSelector((state) => state.ui.theme);
    const user = useSelector((state) => state.user);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        document.body.className = theme;

        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setData(json);
                    setLoading(false);
                }, 2000);
            });
    }, [theme]);

    return (
        <main className="home container">
            <section className={`profile-card ${theme}`}>
                <h2>Личный кабинет</h2>
                <div className="user-info">
                    <p><strong>Имя:</strong> {user.name}</p>
                    <p><strong>Статус:</strong> <span className="status-badge">{user.status}</span></p>
                </div>
            </section>

            <br />

            <section className={`content-section ${theme}`}>
                <h2>Мои задачи на сегодня</h2>

                {loading ? (
                    <p style={{color: 'orange'}}>⏳ Загрузка данных из JSON...</p>
                ) : (
                    <div className="tasks-container">
                        {!selectedItem ? (
                            <ul style={{textAlign: 'left', cursor: 'pointer', listStyle: 'none', padding: 0}}>
                                {data.map(item => (
                                    <li 
                                        key={item.id} 
                                        onClick={() => setSelectedItem(item)} 
                                        style={{
                                            padding: '10px', 
                                            margin: '5px 0', 
                                            background: 'rgba(128,128,128,0.1)',
                                            borderRadius: '5px'
                                        }}
                                    >
                                        {item.title} <b>→</b>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="detail-box" style={{border: '1px solid #646cff', padding: '20px', borderRadius: '10px', textAlign: 'left'}}>
                                <h3>Детали задачи №{selectedItem.id}</h3>
                                <p><strong>Описание:</strong> {selectedItem.title}</p>
                                <p><strong>Выполнено:</strong> {selectedItem.completed ? "Да" : "Нет"}</p>
                                <button onClick={() => setSelectedItem(null)}>Вернуться к списку</button>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Home;