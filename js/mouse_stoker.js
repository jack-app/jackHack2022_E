onload = function() {
  mouse_stoker();
};
function mouse_stoker() {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');//2dコンテキスト

  /*イベントリスナー登録＿イベントはmousemove*/
  canvas.addEventListener('mousemove', onMove, false);

  function onMove (m) {
    /*このキャンバスの絶対座標値をゲットして、マウスの位置を取得*/
    var rect3 = m.target.getBoundingClientRect();
    var mx =  Math.round(m.clientX - rect3.left);
    var my =  Math.round(m.clientY - rect3.top);
    /*円の半径のランダム化（半径3〜10pxにしています）*/
    var hank = Math.floor(Math.random()*8+3);
    /*色指定と、正円の描画*/
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = "#0f0";
    ctx.beginPath();
    ctx.globalCompositeOperation = 'lighter';
    ctx.arc(mx,my,hank,0,Math.PI*2,false);
    ctx.fill();
  };
}
var img = new Image();
img.src = '.src/apple.png';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};
var color = document.getElementById('color');
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ',' + data[1] +
             ',' + data[2] + ',' + (data[3] / 255) + ')';
  color.style.background =  rgba;
  color.textContent = rgba;
}
canvas.addEventListener('mousemove', pick);