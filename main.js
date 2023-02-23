//패널 돌리기
const frame = document.querySelector("section");
const articleFrame = frame.querySelectorAll("article");
const articleLength = articleFrame.length;
const deg = 360 / articleLength;

const names = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];



for (let i = 0; i < articleLength; i += 1) {
  articleFrame[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  const pic = articleFrame[i].querySelector(".pic");
  pic.style.backgroundImage = `url(./img/${names[i]}.jpg)`
}


//버튼 눌러 돌리기
const prev = document.querySelector(".btnPrev")
const next = document.querySelector(".btnNext")
let num = 0;
let active = 0;

prev.addEventListener("click", () => {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  if(active === 0) {
    active = articleLength - 1;
  } else {
    active--;
  }
  for (let el of articleFrame) {
    el.classList.remove("on");
  }
  articleFrame[active].classList.add("on");
})

next.addEventListener("click", () => {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  if(active === articleLength - 1) {
    active = 0;
  } else {
    active++;
  }
  for (let el of articleFrame) {
    el.classList.remove("on");
  }
  articleFrame[active].classList.add("on");
})