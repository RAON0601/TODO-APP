const clock = document.querySelector("#clock");

function timeFormat(date) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

setInterval(() => {
  clock.textContent = timeFormat(new Date());
}, 1000);
