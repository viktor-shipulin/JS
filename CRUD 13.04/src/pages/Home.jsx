import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getItems, selectItem, resetSelection, deleteItem, updatePrice,
    addLike, toggleFavorite, addRating  
} from "../features/noodle/noodleSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { items, status, selectedId, likes, favorites, ratings } = useSelector(state => state.noodle);
    const theme = useSelector(state => state.ui.theme);

    useEffect(() => {
        if (status === "idle") dispatch(getItems());
    }, [status, dispatch]);

    const selectedNoodle = items?.find(n => n.id === selectedId);

    const getAverage = (id) => {
        const arr = ratings[id];
        if (!arr || arr.length === 0) return "нет оценок";
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return (sum / arr.length).toFixed(1); 
    };

    if (status === "loading") {
        return <div style={{ textAlign: 'center', marginTop: '100px' }}><h2>🍜 Завариваем... (2 сек)</h2></div>;
    }

    return (
        <div className={`home-container ${theme}`}>
            {!selectedNoodle ? (
                <section>
                    <h1 style={{ textAlign: 'center', margin: '30px 0' }}>Меню Рамен-бара</h1>
                    <div className="grid">
                        {items?.map(noodle => (
                            <div key={noodle.id} className="card" onClick={() => dispatch(selectItem(noodle.id))}>
                                <img src={noodle.image} alt={noodle.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
                                <div style={{ padding: '15px' }}>
                                    <h3>{noodle.title}</h3>
                                    <p style={{ color: '#ff4500', fontWeight: 'bold', fontSize: '1.2rem' }}>{noodle.price} $</p>

                                    <div style={{ marginTop: '10px' }}>
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch(addLike(noodle.id));
                                        }}>
                                            👍 {likes[noodle.id] || 0}
                                        </button>

                                        {/* ЗАДАНИЕ 2: Избранное — меняем иконку */}
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch(toggleFavorite(noodle.id));
                                        }} style={{ marginLeft: '8px' }}>
                                            {favorites[noodle.id] ? '❤️' : '🤍'}
                                        </button>
                                    </div>

                                    <div style={{ marginTop: '10px' }}>
                                        <span>⭐ Средняя: {getAverage(noodle.id)}</span>
                                        <div style={{ marginTop: '5px', display: 'flex', gap: '4px' }}>
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <button key={star} onClick={(e) => {
                                                    e.stopPropagation();
                                                    dispatch(addRating({ id: noodle.id, rating: star }));
                                                }}>
                                                    {star}⭐
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            const p = prompt("Новая цена:", noodle.price);
                                            if (p) dispatch(updatePrice({ id: noodle.id, newPrice: p }));
                                        }} style={{ flex: 1, cursor: 'pointer' }}>Изменить цену</button>

                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            if (confirm("Удалить?")) dispatch(deleteItem(noodle.id));
                                        }} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px', cursor: 'pointer' }}>🗑</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                <section className="detail-view" style={{ textAlign: 'center', padding: '40px' }}>
                    <button onClick={() => dispatch(resetSelection())} style={{ marginBottom: '20px' }}>← Назад</button>
                    <h1>{selectedNoodle.title}</h1>
                    <img src={selectedNoodle.image} style={{ width: '400px', borderRadius: '20px', margin: '20px 0' }} />
                    <p>{selectedNoodle.description}</p>
                    <h2 style={{ color: '#ff4500' }}>Цена: {selectedNoodle.price} $</h2>
                    <p style={{ marginTop: '20px' }}>
                        👍 {likes[selectedNoodle.id] || 0} лайков &nbsp;|&nbsp;
                        {favorites[selectedNoodle.id] ? '❤️ В избранном' : '🤍 Не в избранном'} &nbsp;|&nbsp;
                        ⭐ {getAverage(selectedNoodle.id)}
                    </p>
                </section>
            )}
        </div>
    );
};

export default Home;