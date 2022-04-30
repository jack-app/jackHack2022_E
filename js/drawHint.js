// 聴覚、味覚・嗅覚のヒントボタンが押されたら
// テキストをふわぁ～っと表示して、消す
// これを繰り返す

// キャンバスのidと表示する文字列、開始位置を引数として描画する関数
// 同じキャンバスに描画しようとすると挙動がおかしくなるから
// 言葉ごとに重ねる必要がありそう（CSSで後で重ねる）
// https://qiita.com/TR246/items/4b84deadb26f1c450722

var hintText = ["視覚を使う", "聴覚を使う", "味覚・嗅覚を使う"];
var hintKind = ["視覚", "聴覚", "味覚・嗅覚"];

function drawText(canvasid, text) {
  var theCanvas = document.getElementById(canvasid);
  var xpos = Math.floor(theCanvas.width * Math.random() * 0.4);
  var ypos = Math.floor(theCanvas.height * (1 - Math.random() * 0.5));
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    var opacity = Math.sin(((alpha % 100) * Math.PI) / 100);
    context.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
    context.font = "20px _sans";
    context.textBaseline = "top";
    context.fillText(text, xpos, ypos - (y % 100));
    y += 2;
    alpha += 2;
  }

  var y = 0;
  var alpha = 0;
  setInterval(drawScreen, 100);
}

function drawHint() {
  var hintButton = document.getElementById("hint");
  var usedHint = document.getElementById("usedHint");
  var buttonText = hintButton.innerHTML;
  if (buttonText === hintText[0]) {
    hintButton.innerHTML = hintText[1];
    usedHint.innerHTML += hintKind[0] + ", ";
  } else if (buttonText === hintText[1]) {
    drawText("canvas1", "ふわふわ");
    hintButton.innerHTML = hintText[2];
    usedHint.innerHTML += hintKind[1] + ", ";
  } else if (buttonText === hintText[2]) {
    drawText("canvas2", "甘い");
    usedHint.innerHTML += hintKind[2];
    hintButton.remove();
  }
}
