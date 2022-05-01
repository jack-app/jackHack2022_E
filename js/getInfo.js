// サーバに情報を取りに行く
const problem1 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problem2 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problem3 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problems = [problem1, problem2, problem3];

const problem = {
  ans: "りんご",
  sound: "しゃくしゃく",
  taste: "甘い",
  smell: "",
};
window.onload = function () {
  console.log(problem);

  mouseStalker();
  setImg();
  setOriImg();
};
