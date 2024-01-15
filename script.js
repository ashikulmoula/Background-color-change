function backgroundColorChange() {
  const hexacode = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hexacode[Math.floor(Math.random() * 16)];
  }
  return color;
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let changeBg;

start.addEventListener("click", function () {
  if (!changeBg) {
    changeBg = setInterval(function () {
      document.body.style.backgroundColor = backgroundColorChange();
    }, 2000);
  }
});
stop.addEventListener("click", function () {
  clearInterval(changeBg);
  changeBg = null;
});
