const w = 100;
const h = 100;

// function veGiaodien() {
//     var ctx = document.getElementById('myCanvas').getContext('2d');

//     ctx.beginpath;
//     ctx.arc(100, 250, 100, 0.5*Math.PI, 1.5*Math.PI);
//     ctx.closepath;
//     ctx.strokeRect(100, 150, 100, 100);
//     ctx.strokeRect(200, 150, 100, 100);
//     ctx.strokeRect(300, 150, 100, 100);
//     ctx.strokeRect(400, 150, 100, 100);
//     ctx.strokeRect(500, 150, 100, 100);
//     ctx.strokeRect(100, 250, 100, 100);
//     ctx.strokeRect(200, 250, 100, 100);
//     ctx.strokeRect(300, 250, 100, 100);
//     ctx.strokeRect(400, 250, 100, 100);
//     ctx.strokeRect(500, 250, 100, 100);
//     ctx.beginpath;
//     ctx.arc(600, 250, 100, -0.5*Math.PI, 0.5*Math.PI);
//     ctx.closepath;
//     ctx.stroke();
// }
// veGiaodien();

class oDanInfo {
    constructor (stt, soQuan) {
        this.soQuan = soQuan;
        this.stt = stt;
    }

    draw() {
        var ctx = document.getElementById('myCanvas').getContext('2d');
        let x = this.stt*100;
        let dem1 = 0;
        let dem2 = 0;
        let y = 150;
        let img1 = document.getElementById('anhDan');
        if (this.stt >5) {
            x = (this.stt - 5)*100;
            y = 250;
        }
        ctx.strokeRect(x, y, w, h);
        if (this.soQuan > 0) {
            for (let i = 0; i < this.soQuan; i++) {
                let x1 = x + 20*(i%5);
                let y1 = y + 20*(Math.floor(i/5));
                ctx.drawImage(img1,x1, y1);
            }
        }
    }
}

class oQuanInfo {
    constructor(stt, soQuan) {
        this.stt = stt;
        this.soQuan = soQuan;
    }

    draw() {
        var ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.beginpath;
        if (this.stt == 1) 
            ctx.arc(100, 250, 100, 0.5*Math.PI, 1.5*Math.PI); 
        else ctx.arc(600, 250, 100, -0.5*Math.PI, 0.5*Math.PI);
        ctx.closepath;
    }
}

let oDan1 = new oDanInfo(1,5);
oDan1.draw();
let oDan2 = new oDanInfo(2,8);
oDan2.draw();
let oQuan1 = new oQuanInfo(1,1);
oQuan1.draw();