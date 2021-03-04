// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива 
// используя инлайн - стиль.При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, 
// кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]')

startBtnRef.addEventListener('click', handleStartBtn);
stopBtnRef.addEventListener('click', handleStopBtn);

const changeOfBackgroundcolor = () => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, (colors.length - 1))];
};

let timerId;
function handleStartBtn() {
    startBtnRef.disabled = true;
    timerId = setInterval(changeOfBackgroundcolor, 1000);
    startBtnRef.removeEventListener('click', handleStartBtn);
    stopBtnRef.addEventListener('click', handleStopBtn);
};

function handleStopBtn() { 
    startBtnRef.disabled = false;
    clearInterval(timerId)
    stopBtnRef.removeEventListener('click', handleStopBtn);
    startBtnRef.addEventListener('click', handleStartBtn);
};


