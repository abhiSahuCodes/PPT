const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

const clock = setInterval(time = () => {
    const dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();
    hr = hr.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
  }, 1000);
