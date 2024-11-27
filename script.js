let time = 25 * 60; // 25 minutes
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('start');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

const quotes = [
  "Stay focused and never give up!",
  "You can do anything you set your mind to.",
  "Small steps lead to big results.",
  "Every moment is a fresh beginning."
];

startButton.addEventListener('click', () => {
  const timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
      alert("Time's up! Take a break.");
    } else {
      time--;
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  }, 1000);
});

addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

newQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
