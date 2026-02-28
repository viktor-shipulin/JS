const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNoodlesApi = async () => {
    await delay(2000); 

    const realNoodles = [
        {
            id: 1,
            title: "Классический Тонкоцу",
            description: "Насыщенный свиной бульон, чашу, маринованное яйцо и бамбук.",
            spicy: 1,
            price: "12.50",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80" 
        },
        {
            id: 2,
            title: "Острый Мисо Рамен",
            description: "Ферментированная соевая паста с добавлением чили масла и фарша.",
            spicy: 4,
            price: "13.20",
            image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Сёю Рамен",
            description: "Легкий соевый бульон с курицей и сушеными водорослями нори.",
            spicy: 1,
            price: "11.80",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Веганский Тантанмен",
            description: "Ореховый бульон на основе кунжута с соевым мясом и грибами.",
            spicy: 3,
            price: "14.00",
            image: "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            title: "Тори Пайтан",
            description: "Густой кремовый куриный бульон с нежным филе су-вид.",
            spicy: 0,
            price: "15.50",
            image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Кимчи Рамен",
            description: "Острая корейская классика с ферментированной капустой и яйцом.",
            spicy: 5,
            price: "12.90",
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return realNoodles;
};