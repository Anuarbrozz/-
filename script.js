const newYear = new Date('January 1, 2027 00:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = Math.max(0, newYear - now);
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(3, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const wishes = [
  'Жаңа жыл саған мол бақыт пен зор денсаулық әкелсін!',
  'Барлық арманың орындалып, әр күнің қуанышқа толсын!',
  'Оқуда, жұмыста және барлық бастамаңда сәттілік серік болсын!',
  'Жаңа жыл жаңа жетістіктер мен жарқын мүмкіндіктерге толы болсын!'
];

document.getElementById('wishButton').addEventListener('click', () => {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById('wishText').textContent = randomWish;
});
