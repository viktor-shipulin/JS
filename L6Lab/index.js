const users = [
    { login: "admin", password: "1234", name: "Макс" },
    { login: "user1", password: "4321", name: "Маша" },
];

const btn = document.getElementById("btn");
const loginInput = document.getElementById("login");
const passInput = document.getElementById("password");
const message = document.getElementById("message");

btn.addEventListener("click", function() {
    const login = loginInput.value;
    const password = passInput.value;
    const found = users.find(user => user.login === login && user.password === password);
    if (found) {
        message.style.color = "green";
        message.textContent = "Добро пожаловать, " + found.name;
    } else {
        message.style.color = "red";
        message.textContent = "Неверный логин или пароль."
    }
})