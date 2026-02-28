import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  return (
    <header className="header" style={{ padding: '20px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        РАМЕН
      </div>
      <button 
        onClick={() => dispatch(toggleTheme())}
        style={{ cursor: 'pointer', padding: '10px' }}
      >
        {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
      </button>
    </header>
  );
};

export default Header;