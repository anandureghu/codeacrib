// const sky = document.querySelector(".sky");
const STAR_COUNT = 200;
for (let i = 0; i < STAR_COUNT; i++) {
  console.log("star");
  sky.innerHTML += `<span class="star star${i}"></span>`;
  const star = document.querySelector(`.star${i}`);
  const top = Math.floor(Math.random() * sky.clientHeight - 90) + 1;
  const left = Math.floor(Math.random() * sky.clientWidth) + 1;
  const size = Math.floor(Math.random() * 4) + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${top}px`;
  star.style.left = `${left}px`;
}

const GLOWING_STAR_COUNT = 25;
setInterval(() => {
  for (let i = 0; i < GLOWING_STAR_COUNT; i++) {
    const randomStar = Math.floor(Math.random() * STAR_COUNT) + 1;
    const star = document.querySelector(`.star${randomStar}`);
    star.classList.add("glow");
    setTimeout(() => {
      star.classList.remove("glow");
    }, 1000);
  }
}, 5000);
