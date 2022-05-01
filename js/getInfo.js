// サーバに情報を取りに行く
const problem1 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problem2 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problem3 = "りんご,しゃくしゃく,甘い,ぶどう,もも,バナナ,りんご";
const problems = [problem1, problem2, problem3];
window.onload = function () {
  console.log(problems);

  mouseStalker();
  setImg();
  setOriImg();
};
