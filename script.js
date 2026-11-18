
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
    tg.setHeaderColor("#080d1c");
    tg.setBackgroundColor("#080d1c");
}

let balance = 1000;

function updateBalance() {
    document.getElementById("balance").textContent = balance;
}

function openGame(game) {
    document.querySelector(".games").style.display = "none";
    document.querySelector("main > h2").style.display = "none";
    document.querySelector(".banner").style.display = "none";

    const screen = document.getElementById("game-screen");
    const content = document.getElementById("game-content");

    screen.style.display = "block";

    const names = {
        mines: "💣 Мины",
        upgrade: "🎡 Апгрейд",
        blackjack: "🃏 Блэкджек",
        demo: "🎯 Демо-игра"
    };

    content.innerHTML = `
        <h2>${names[game]}</h2>
        <p>Демонстрационная версия</p>
        <p>Баланс: 🪙 ${balance}</p>
        <p>Игровой режим скоро будет доступен!</p>
    `;
}

function goHome() {
    document.querySelector(".games").style.display = "grid";
    document.querySelector("main > h2").style.display = "block";
    document.querySelector(".banner").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
}

function openTab(tab) {
    const message = document.getElementById("message");
    message.style.display = "block";
    message.textContent = "Раздел: " + tab;
}

updateBalance();
