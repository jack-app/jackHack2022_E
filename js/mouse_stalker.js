onload = function() {
  mouse_stalker();
  set_img();
};

function mouse_stalker() {
  const stalker = document.getElementById('stalker');
  const radius = 8 //stalkerの半径(pt)
  let canvas = document.getElementById('canvas');
  //上記のdivタグをマウスに追従させる処理
  canvas.addEventListener('mousemove', function (e) {
    stalker.style.left = `${e.clientX-radius}px`;
    stalker.style.top = `${e.clientY-radius}px`;
  });
}

function touch_surface(event) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let x = event.clientX;
  let y = event.clientY;
  let pixel = ctx.getImageData(x, y, 1, 1);
  let data = pixel.data;
}

function set_img(){
  let img = new Image();
  img.src = 'src/apple2ch.png';
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  img.onload = function() {
    ctx.drawImage(img, 0, 0,150,150);
    img.style.display = 'none';
  };
  canvas.addEventListener('mousemove', touch_surface);
}

