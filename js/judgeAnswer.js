// 正誤判定する
// ページごとに正解を決めておいて、それに従って制御する以外なさそう

const correctModal = document.getElementById("correctModal");
const wrongModal = document.getElementById("wrongModal");
const correctClose = document.getElementsByClassName("modalClose")[1];
const wrongClose = document.getElementsByClassName("modalClose")[2];

//ボタンがクリックされた時
b1.addEventListener("click", { name: b1.innerHTML, handleEvent: judge });
b2.addEventListener("click", { name: b2.innerHTML, handleEvent: judge });
b3.addEventListener("click", { name: b3.innerHTML, handleEvent: judge });
b4.addEventListener("click", { name: b4.innerHTML, handleEvent: judge });
function judge() {
  var score = document.getElementById("score");
  var scoreText = score.innerHTML;
  var score_num = scoreText.slice(3, -2) - 0;
  if (this.name === "りんご") {
    correctModal.style.display = "block";
    var plusScore = document.getElementById("correct");
    if (score_num >= 0) {
      plusScore.innerHTML = "正解！+" + score_num.toString() + "pt";
    } else {
      plusScore.innerHTML = "正解！" + score_num.toString() + "pt";
    }
    var pnum = localStorage.getItem("problem");
    localStorage.setItem("score" + pnum, score_num);
    console.log(localStorage.getItem("score" + pnum));
    localStorage.setItem("problem", parseInt(pnum) + 1);
    console.log(localStorage.getItem("problem"));
  } else {
    wrongModal.style.display = "block";
    score_num -= 40;
    score.innerHTML =
      scoreText.slice(0, 3) + score_num.toString() + scoreText.slice(-2);
  }
}

//モーダルコンテンツ以外がクリックされた時
addEventListener("click", correctOutside);
function correctOutside(e) {
  if (e.target == correctModal) {
    correctModal.style.display = "none";
  }
}

addEventListener("click", wrongOutside);
function wrongOutside(e) {
  if (e.target === wrongModal) {
    wrongModal.style.display = "none";
  }
}
