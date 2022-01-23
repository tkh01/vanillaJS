const clock = document.querySelector("#clock");
clock.innerText = " ";

function getClock() {
  const date = new Date();
  //   padStart는 문자에만 사용가능하기 때문에 String으로 변환부터 해줌
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// 일정간격으로 계속 호출
// setInterval(sayHello, 1000);

// 일정시간 기다렸다가 한번만 호출
// setTimeout(sayHello, 1000);
