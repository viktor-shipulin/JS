import { useDispatch, useSelector } from "react-redux"; 
import { toggleTheme } from "../features/ui/uiSlice"; 
import "../styles/header.css"; 

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.ui.theme); 

    return (
        <header className={`header ${theme}`}>
            <div className="container header-content">
                <h1>ПРИВЕТ!</h1> 
                <nav className="nav-menu">
                    <a href="/">Главная</a>
                    <a href="/profile">Профиль</a>
                    <a href="/settings">Настройки</a>
                </nav>

                <button className="theme-btn" onClick={() => dispatch(toggleTheme())}>
                    Тема: {theme === 'light' ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
};

export default Header;