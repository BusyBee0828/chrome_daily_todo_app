const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // 시간을 두 자리 형식으로 변환
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;  // 00:00:00 형식으로 출력
}

getClock();
setInterval(getClock, 1000);

