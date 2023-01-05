const button = document.getElementById('btn');
const body = document.body;

const colors = ['DeepPink', 'MidnightBlue', 'RebeccaPurple', 'Salmon', 'Aqua', 'Gray', 'SeaShell'];

body.style.backgroundColor = colors[0];

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random(colors) * 8);
  body.style.backgroundColor = colors[randomColor];
};

button.addEventListener('click', changeBackgroundColor);
