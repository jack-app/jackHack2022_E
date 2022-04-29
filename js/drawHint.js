// 聴覚、味覚・嗅覚のヒントボタンが押されたら
// テキストをふわぁ～っと表示して、消す
// これを繰り返す

// キャンバスのidと表示する文字列、開始位置を引数として描画する関数
// 同じキャンバスに描画しようとすると挙動がおかしくなるから
// 言葉ごとに重ねる必要がありそう（CSSで後で重ねる）
// https://qiita.com/TR246/items/4b84deadb26f1c450722

function drawText(canvasid, text) {
  var theCanvas = document.getElementById(canvasid);
  var xpos = Math.floor(theCanvas.width * Math.random() * 0.4);
  var ypos = Math.floor(theCanvas.height * (1 - Math.random() * 0.5));
  var context = theCanvas.getContext("2d");

  function drawScreen() {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    y += 2;
    context.fillStyle = "#000000";
    context.font = "20px _sans";
    context.textBaseline = "top";
    context.fillText(text, xpos, ypos - (y % 100));
  }

  var y = 0;
  setInterval(drawScreen, 100);
}

function drawHint() {
  var hintButton = document.getElementById("hint");
  var kind = hintButton.innerHTML;
  if (kind === "聴覚を使う") {
    drawText("canvas1", "ふわふわ");
    hintButton.innerHTML = "味覚・嗅覚を使う";
  } else if (kind === "味覚・嗅覚を使う") {
    drawText("canvas2", "甘い");
    hintButton.remove();
  }
}
