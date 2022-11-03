function veGiaodien() {
    var ctx = document.getElementById('myCanvas').getContext('2d');

    ctx.beginpath;
    ctx.arc(100, 250, 100, 0.5*Math.PI, 1.5*Math.PI);
    ctx.closepath;
    ctx.strokeRect(100, 150, 100, 100);
    ctx.strokeRect(200, 150, 100, 100);
    ctx.strokeRect(300, 150, 100, 100);
    ctx.strokeRect(400, 150, 100, 100);
    ctx.strokeRect(500, 150, 100, 100);
    ctx.strokeRect(100, 250, 100, 100);
    ctx.strokeRect(200, 250, 100, 100);
    ctx.strokeRect(300, 250, 100, 100);
    ctx.strokeRect(400, 250, 100, 100);
    ctx.strokeRect(500, 250, 100, 100);
    ctx.beginpath;
    ctx.arc(600, 250, 100, -0.5*Math.PI, 0.5*Math.PI);
    ctx.closepath;
    ctx.stroke();
}
veGiaodien();