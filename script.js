// ИЗМЕНИТЕ ДАННЫЕ НИЖЕ ПОД СВОЁ ПРИГЛАШЕНИЕ
const wedding = {
  nameOne: "ИМЯ ЖЕНИХА",
  nameTwo: "ИМЯ НЕВЕСТЫ",
  date: "2027-06-20T16:00:00", // формат: ГГГГ-ММ-ДДTЧЧ:ММ:СС
  dateLabel: "20 ИЮНЯ 2027",
  venue: "Название ресторана",
  address: "Город, улица и адрес",
  mapUrl: "https://maps.google.com/"
};

document.getElementById("nameOne").textContent = wedding.nameOne;
document.getElementById("nameTwo").textContent = wedding.nameTwo;
document.getElementById("dateText").textContent = wedding.dateLabel;
document.getElementById("venue").textContent = wedding.venue;
document.getElementById("address").textContent = wedding.address;
document.getElementById("mapLink").href = wedding.mapUrl;

function updateCountdown() {
  const diff = new Date(wedding.date).getTime() - Date.now();
  const values = diff > 0 ? {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60
  } : {days: 0, hours: 0, minutes: 0, seconds: 0};
  Object.entries(values).forEach(([key, value]) => {
    document.getElementById(key).textContent = String(value).padStart(key === "days" ? 3 : 2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", event => {
  event.preventDefault();
  const guest = document.getElementById("guestName").value.trim();
  const answer = document.getElementById("attendance").value;
  document.getElementById("formNote").textContent =
    `Спасибо, ${guest}! Ваш ответ: «${answer}» Запишите его и передайте организаторам.`;
  event.target.reset();
});