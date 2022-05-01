// サーバに情報を取りに行く
const problems = [
  {
    ans: "りんご",
    options: ["りんご", "もも", "バナナ", "ぶどう"],
    sound: "しゃくしゃく",
    taste: "あまい",
    binarizationImage: "src/apple2ch.png",
    image: "src/apple.png",
  },
  {
    ans: "きりん",
    options: ["きりん", "もも", "バナナ", "ぶどう"],
    sound: "モォー",
    taste: "",
    binarizationImage: "src/apple2ch.png",
    image: "src/apple.png",
  },
];
console.log(problems.length);

let problemNum = localStorage.getItem("problemNum");
problemNum = problemNum ? problemNum : 0;
localStorage.setItem("problemNum", problemNum);
let problem = problems[problemNum];
let shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let shuffledOptions = shuffleArray(problem.options);

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
b1.innerHTML = shuffledOptions[0].toString();
b2.innerHTML = shuffledOptions[1].toString();
b3.innerHTML = shuffledOptions[2].toString();
b4.innerHTML = shuffledOptions[3].toString();

window.onload = function () {
  mouseStalker();
  setImg();
  setOriImg();
};
