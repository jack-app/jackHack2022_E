//stokerの位置更新
function mouseStalker() {
  const stalker = document.getElementById("stalker");
  let radius = stalker.clientWidth / 2;

  let canvas = document.getElementById("sight");
  // 1番上のキャンバスにイベントを追加する必要がある
  let canvas2 = document.getElementById("canvas2");
  //上記のdivタグをマウスに追従させる処理
  canvas2.addEventListener("mouseenter", (e) => {
    stalker.style.left = `${e.clientX - radius}px`;
    stalker.style.top = `${e.clientY - radius}px`;
  });

  canvas2.addEventListener(
    "mousemove",
    (e) => {
      let dx, dy;
      [dx, dy] = stalkerMove(e);
      let x = parseFloat(stalker.style.left.slice(0, -2));
      let y = parseFloat(stalker.style.top.slice(0, -2));
      stalker.style.left = `${x + dx}px`;
      stalker.style.top = `${y + dy}px`;
    },
    true
  );
}

//mousemoveしたときのstokerの位置更新
//表面を触っているときはtouchクラスが付きます
//色の更新も同時にやっちゃってます
function stalkerMove(e) {
  //stalkerの相対位置を取得
  hintButton.innerHTML != hintText[0];
  let colorFrag = true; //視覚のヒントが出ているか
  let canvas = document.getElementById("sight");
  let canvasPos = canvas.getBoundingClientRect();
  let stalker = document.getElementById("stalker");
  let stalkerPos = stalker.getBoundingClientRect();
  let x = stalkerPos.x - canvasPos.x;
  let y = stalkerPos.y - canvasPos.y;
  let dy, dx;
  let radius = stalker.clientWidth / 2;

  let ctx = canvas.getContext("2d");
  let color = ctx.getImageData(
    Math.min(Math.max(x - 1 + radius, 0), canvas.clientWidth - 1),
    Math.min(Math.max(y - 1 + radius, 0), canvas.clientHeight - 3),
    3,
    3
  );

  let data = color.data;
  let tangentX, tangentY;

  //r成分だけ使ってソーベルフィルタでエッジ検出
  tangentY =
    data[0] - data[8] + 2 * data[12] - 2 * data[20] + data[24] - data[32];
  tangentX =
    data[0] + 2 * data[4] + data[8] - data[24] - 2 * data[28] - data[32];
  let r = tangentX ** 2 + tangentY ** 2;
  if (r != 0) {
    tangentX /= Math.sqrt(r); //正規化
    tangentY /= -Math.sqrt(r);
  }

  if (r < 65536) {
    //触ってない
    if (stalker.classList.contains("touch")) {
      stalker.classList.toggle("touch");
    }
    stalker.style.background = "rgba(236, 68, 81, 0.226)";
    dx = e.movementX;
    dy = e.movementY;
  } else {
    //touch
    if (!stalker.classList.contains("touch")) {
      stalker.classList.toggle("touch");
    }
    if (colorFrag) {
      let colorcanvas = document.getElementById("colorPick");
      let colorctx = colorcanvas.getContext("2d");
      let colorpixel = colorctx.getImageData(x + radius, y + radius, 1, 1);
      let colordata = colorpixel.data;

      let rgba =
        "rgba(" +
        colordata[0] +
        "," +
        colordata[1] +
        "," +
        colordata[2] +
        "," +
        1 +
        ")";
      stalker.style.background = rgba;
    } else {
      stalker.style.background = "rgb(236, 68, 81)";
    }

    let dot = e.movementX * tangentX + e.movementY * tangentY;
    dx = tangentX * dot;
    dy = tangentY * dot;
  }
  return [dx, dy];
}

//とりあえず表示してるだけ縦横比狂ってます
function setImg() {
  let img = new Image();
  img.src = problem.binarizationImage;
  let canvas = document.getElementById("sight");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  img.onload = function () {
    ctx.drawImage(img, 185, 10, 330, 330);
    img.style.display = "none";
  };
}

function setOriImg() {
  let img = new Image();
  img.src = problem.image;
  let canvas = document.getElementById("colorPick");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  img.onload = function () {
    ctx.drawImage(img, 182, 7, 336, 336);
    img.style.display = "none";
  };
}
