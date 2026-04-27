const targetDate = new Date("2026-05-17T00:00:00+06:00");

const values = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]'),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function renderCountdown() {
  const remaining = Math.max(0, targetDate.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  values.days.textContent = pad(days);
  values.hours.textContent = pad(hours);
  values.minutes.textContent = pad(minutes);
  values.seconds.textContent = pad(seconds);
}

renderCountdown();
setInterval(renderCountdown, 1000);
