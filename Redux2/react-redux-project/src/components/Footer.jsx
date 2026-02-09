import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2026 Мой Проект</p>
                <div className="footer-links">
                    <a href="#">Github</a>
                    <a href="#">Документация</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;