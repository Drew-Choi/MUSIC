//패널 돌리기
const frame = document.querySelector("section");
const articleFrame = frame.querySelectorAll("article");
const articleLength = articleFrame.length;
const deg = 360 / articleLength;

const names = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];

for (let i = 0; i < articleLength; i += 1) {
  articleFrame[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  const pic = articleFrame[i].querySelector(".pic");
  pic.style.backgroundImage = `url(./img/${names[i]}.jpg)`;

  const title = articleFrame[i].querySelector(".text > h2");
  title.innerHTML = `${names[i]}`;

  //음악파일 일괄적용
  const audio = document.createElement("audio");
  audio.setAttribute("src", `./music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");
  articleFrame[i].append(audio);
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
    // el.querySelector("audio").pause();
    // el.querySelector(".pic").classList.remove('on');
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
    // el.querySelector("audio").pause();
    // el.querySelector(".pic").classList.remove('on');
  }
  articleFrame[active].classList.add("on");
})

//cd회전
let before = 0; //이전 위치 기억용

for (let el of articleFrame) {
  const play = el.querySelector(".play")
  const pause = el.querySelector(".pause")
  const reroad = el.querySelector(".reroad")

  play.addEventListener("click", (e) => {
    if (before === 0) {
      before = e.target;
    } else if (before !== e.target) {
      before.closest("article").querySelector(".pic").classList.remove("on");
      before.closest("article").querySelector("audio").pause();
      before = e.target;
    }

    el.querySelector(".pic").classList.add('on');
    el.querySelector("audio").play();
  })

  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  })

  reroad.addEventListener("click", (e) => {
    if (before === 0) {
      before = e.target;
    } else if (before !== e.target) {
      before.closest("article").querySelector(".pic").classList.remove("on");
      before.closest("article").querySelector("audio").pause();
      before = e.target;
    }
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
  })
}