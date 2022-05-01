// 正誤判定する
// ページごとに正解を決めておいて、それに従って制御する以外なさそう

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const buttons = [b1, b2, b3, b4];

const correctModal = document.getElementById("correctModal");
const wrongModal = document.getElementById("wrongModal");
const correctClose = document.getElementsByClassName("modalClose")[1];

var score = document.getElementById("score");

// 得点初期化
let scoreNum = localStorage.getItem("scoreNum");
scoreNum = scoreNum ? scoreNum : 100;
localStorage.setItem("scoreNum", scoreNum);
score.innerHTML = scoreNum.toString();

//ボタンがクリックされた時
b1.addEventListener("click", { name: b1.innerHTML, handleEvent: judge });
b2.addEventListener("click", { name: b2.innerHTML, handleEvent: judge });
b3.addEventListener("click", { name: b3.innerHTML, handleEvent: judge });
b4.addEventListener("click", { name: b4.innerHTML, handleEvent: judge });

function judge() {
  if (this.name === problem["ans"]) {
    correctModal.style.display = "block";
    localStorage.setItem("totalScoreNum", scoreNum);
  } else {
    wrongModal.style.display = "block";
    scoreNum -= 40;
    if (scoreNum <= -500) {
      localStorage.clear();
      alert("押しすぎだぞ(#´Д｀) 悪い子は最初からやり直しだ！");
      window.location.href = "../index.html";
      return;
    }
  }
  localStorage.setItem("scoreNum", scoreNum);
  score.innerHTML = scoreNum.toString();
}

//モーダルコンテンツ以外がクリックされた時
// addEventListener("click", correctOutside);
// function correctOutside(e) {
//   if (e.target == correctModal) {
//     correctModal.style.display = "none";
//   }
// }

addEventListener("click", wrongOutside);
function wrongOutside(e) {
  if (e.target === wrongModal) {
    wrongModal.style.display = "none";
  }
}

const wrongModalClose = document.getElementById("wrongModalClose");
wrongModalClose.addEventListener("click", () => {
  wrongModal.style.display = "none";
});
