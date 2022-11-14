class oInfo {
    constructor(stt, soDan) {
        this.stt = stt;
        this.soDan = soDan;
    }

    draw() {
        switch (this.stt) {
            case 12: 
                var ctx = document.getElementById('myCanvas1').getContext('2d');
                ctx.clearRect(0, 0, 100, 200);
                ctx.lineWidth = 2;
                ctx.font = '30px Arial';
                ctx.arc(100, 100, 100, 0*Math.PI, 1.5*Math.PI);
                ctx.fillText(this.soDan,50,110);
                ctx.stroke();
                break;
            case 6:
                var ctx = document.getElementById('myCanvas2').getContext('2d');
                ctx.clearRect(0, 0, 100, 200);
                ctx.lineWidth = 2;
                ctx.font = '30px Arial';
                ctx.arc(0, 100, 100, -0.5*Math.PI, 0.5*Math.PI);
                ctx.fillText(this.soDan,50,110);
                ctx.stroke();
                break;
        default:
            let score = 'dan' + this.stt;
            document.getElementById(score).innerHTML = this.soDan;
            document.getElementById(score).style.fontSize = '30px';
            break;
        }
    }
}
let banco = [];

function veBanCo() {
    for (let i = 1; i < 13; i++) {
        if (i % 6 == 0) {
            let taovan = new oInfo(i,10);
            banco.push(taovan);
        } else {
            let taovan = new oInfo(i,5);
            banco.push(taovan);
        }
    }
    for (let i = 0; i <banco.length; i++) 
        banco[i].draw();
}

veBanCo();

function reload() {
    for (let i = 0; i <banco.length; i++) 
        banco[i].draw();
}

var chonO;

async function doiMauOChon(a) {
        if (banco[a].stt % 6 == 0) {
            let x = 'quan' + banco[a].stt;
            document.getElementById(x).style.backgroundColor = 'red';
            await sleep(300);
            document.getElementById(x).style.backgroundColor = 'white';
        } else {
            let x = 'dan' + banco[a].stt;
            document.getElementById(x).style.backgroundColor = 'red';
            await sleep(300);
            document.getElementById(x).style.backgroundColor = 'white';
        }
    }

function chon(a) {
    let x = a - 1;
    doiMauOChon(x);
    chonO = x;
}

var oDuocChon;

function raiQuan(luot, chieu, z) {
    let x = 'dan' + banco[z].stt;
    document.getElementById(x).style.backgroundColor = 'white';
    let y = banco[z].soDan;
    banco[z].soDan = 0;
    if (chieu == 'left')
    {   z += 1;
        for (let i = 0; i < y; i++) { 
            banco[z].soDan += 1;
            doiMauOChon(z);
            z++;
            if (z == 12) { z = 0;}
        reload();
    }
} else {
    z -= 1;
    for (let i = 0; i < y; i++) { 
        banco[z].soDan +=1;
        doiMauOChon(z);
        z--;
        if (z == -1) { z = 11;}
    reload();
        }
    }
    oDuocChon = z;
    check('player',chieu,oDuocChon);
}

function left() {
    raiQuan('player','left', chonO);
}

function right() {
    raiQuan('player','right', chonO);
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

function check(luot, chieu, chonO){
    if (banco[chonO].soDan == 0) {
        if (chieu == 'left') {
            if (banco[chonO+1].soDan == 0) {alert("Hết lượt");}
            else {
                tinhDiem(luot, banco[chonO+1].soDan);
                banco[chonO+1].soDan = 0;
            }
        } else {
            if (banco[chonO-1].soDan == 0) {alert("Hết lượt");}
            else {
                tinhDiem(luot, banco[chonO+1].soDan);
                banco[chonO-1].soDan = 0;
        }
    }
} else {
    raiQuan(luot, chieu, chonO);
}
}

function tinhDiem(player, diem) {
    let scoreAI = 0;
    let scorePlayer = 0;
    if (player == 'player') {
        scorePlayer += diem;
        document.getElementById('scorePlayer').innerHTML = 'Score: ' + diem;
    } else {
        scoreAI += diem;
        document.getElementById('scoreAI').innerHTML = 'Score: '+diem;
    }
}
