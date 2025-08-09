
const questions = [
  { q: "What is 2 + 2?", a: "4" },
  { q: "What color is the sky?", a: "blue" },
  { q: "Spell 'cat' backwards.", a: "tac" },
  { q: "What is 10 / 2?", a: "5" },
  { q: "Name a fruit.", a: "apple" }
  
];

const failResponses = [
  "You thought that was right? LOL.",
  "You're smart, but this game doesn't care.",
  "Too logical. You FAIL.",
  "You’ve been tricked again!",
  "The answer was right, but you're still wrong."
];

let current = 0;
let username = '';
let startTime, endTime;

function startQuiz() {
  username = document.getElementById('username').value.trim();
  if (username === '') {
    alert('Please enter your name!');
    return;
  }

  startTime = new Date();

  document.getElementById('nameInput').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  document.getElementById('question').textContent = questions[current].q;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('answer').disabled = false;
  document.querySelector('button[onclick="submitAnswer()"]').disabled = false;
}

function submitAnswer() {
  const randomFail = failResponses[Math.floor(Math.random() * failResponses.length)];
  document.getElementById('result').textContent = randomFail;

  document.getElementById('answer').disabled = true;
  document.querySelector('button[onclick="submitAnswer()"]').disabled = true;

  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    endQuiz(" You Finished (but not really)");
  }
}
function endQuiz(finalMessage) {
  endTime = new Date();
  const secondsWasted = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(secondsWasted / 60);
  const seconds = secondsWasted % 60;

  document.getElementById('game').innerHTML = `
    <h2>${finalMessage}</h2>
    <p>Hey <strong>${username}</strong>, you wasted <strong>${minutes} minute(s) and ${seconds} second(s)</strong> of your life here.</p>
    <p>And guess what? You still failed </p>
  `;
}