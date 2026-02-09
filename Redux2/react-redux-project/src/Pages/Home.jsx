import { useSelector } from "react-redux";
import { useEffect } from "react"; 
import "../styles/home.css";

const Home = () => {
    const theme = useSelector((state) => state.ui.theme);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <main className="home container">
            <section className={`profile-card ${theme}`}>
                <h2>Личный кабинет</h2>
                <div className="user-info">
                    <p><strong>Имя:</strong> {user.name}</p>
                    <p><strong>Хобби:</strong> {user.hobbies?.join(', ') || 'Не указаны'}</p>
                    <p><strong>Статус:</strong> <span className="status-badge">Online</span></p>
                </div>
            </section>
        </main>
    );
};

export default Home;