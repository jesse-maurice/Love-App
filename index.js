const maleEl = document.getElementById("male-name");
const femaleEl = document.getElementById("female-name");
const textEl = document.querySelector(".text");
const loveBtnE1 = document.querySelector(".love-btn");

const loveCalc = () => {
  const maleName = String(maleEl.value);
  const femaleName = String(femaleEl.value);
  const names = maleName + femaleName;

  let lowerNames = names.toLowerCase();

  let t = lowerNames.split("t").length - 1;
  let r = lowerNames.split("r").length - 1;
  let u = lowerNames.split("u").length - 1;
  let e = lowerNames.split("e").length - 1;

  const true1 = t + r + u + e;

  let l = lowerNames.split("l").length - 1;
  let o = lowerNames.split("o").length - 1;
  let v = lowerNames.split("v").length - 1;
  let a = lowerNames.split("e").length - 1;

  const love = l + o + v + a;

  loveScore = Number(String(true1) + String(love));

  if (loveScore < 10 || loveScore > 90) {
    textEl.textContent = `Your score is ${loveScore}, you go together like coke and mentos.`;
  } else if (loveScore > 40 && loveScore < 50) {
    textEl.textContent = `Your score is ${loveScore}, you are alright together.`;
  } else {
    textEl.textContent = `Your score is ${loveScore}, just forget about it.`;
  }
};

loveBtnE1.addEventListener("click", loveCalc);
