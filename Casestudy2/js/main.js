class oInfo {
    constructor(stt, soQuan, soDan) {
        this.stt = stt;
        this.soQuan = soQuan;
        this.soDan = soDan;
    }

    draw() {
        if (this.soQuan != 0) {
            if (this.stt == 12 ) {
                var ctx = document.getElementById('myCanvas1').getContext('2d');
                ctx.clearRect(0, 0, 100, 200);
                ctx.lineWidth = 2;
                ctx.font = '30px Arial';
                ctx.arc(100, 100, 100, 0*Math.PI, 1.5*Math.PI);
                ctx.fillText(this.soQuan,50,110);
                ctx.stroke();
            } else {
                var ctx = document.getElementById('myCanvas2').getContext('2d');
                ctx.clearRect(0, 0, 100, 200);
                ctx.lineWidth = 2;
                ctx.font = '30px Arial';
                ctx.arc(0, 100, 100, -0.5*Math.PI, 0.5*Math.PI);
                ctx.fillText(this.soQuan,50,110);
                ctx.stroke();
            }
        } else {
            let score = 'dan' + this.stt;
            document.getElementById(score).innerHTML = this.soDan;
            document.getElementById(score).style.fontSize = '30px';
        }
    }
}

let banco = [];

function veBanCo() {
    for (let i = 1; i < 13; i++) {
        if (i % 6 == 0) {
            let taovan = new oInfo(i,10,0);
            banco.push(taovan);
        } else {
            let taovan = new oInfo(i,0,5);
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
            x = 'quan' + banco[a].stt;
            document.getElementById(x).style.backgroundColor = 'red';
            await sleep(300);
            document.getElementById(x).style.backgroundColor = 'white';
        } else {
            x = 'dan' + banco[a].stt;
            document.getElementById(x).style.backgroundColor = 'red';
            banco[a].soDan += 1;
            await sleep(300);
            document.getElementById(x).style.backgroundColor = 'white';
        }
    }

function chon(a) {
    let x = a - 1;
    doiMauOChon(x);
    return x;
}

let scoreAI = 0;
let scorePlayer = 0;

function raiQuan(chieu, chonO) {
    let x = 'dan' + banco[chonO].stt;
    document.getElementById(x).style.backgroundColor = 'white';
    let y = banco[chonO].soDan;
    banco[chonO].soDan = 0;
    if (chieu == 'left')
    {   chonO += 1;
        for (let i = 0; i < y; i++) { 
            if (banco[chonO].stt % 6 == 0) {
                banco[chonO].soQuan += 1; 
                doiMauOChon(chonO);
            } else {
                banco[chonO].soDan += 1;
                doiMauOChon(chonO);
            }
            chonO++;
            if (chonO == 12) { chonO = 0;}
        reload();
    }
} else {
    chonO -= 1;
    for (let i = 0; i < y; i++) { 
        if (banco[chonO].stt % 6 == 0) {
            x = 'quan' + banco[chonO].stt;
                banco[chonO].soQuan += 1; 
                doiMauOChon(chonO); 
        } else {
                banco[chonO].soDan += 1;
                doiMauOChon(chonO);
        }
        chonO--;
        if (chonO == -1) { chonO = 11;}
    reload();
        }
    }
}

function left() {
    raiQuan('left', chon(a));
}

function right() {
    raiQuan('right', chon(a));
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

function check(chieu, chonO){
    if (banco[chonO].stt % 6 == 0) {
        alert('Ban da het luot.');
    } else {
        if (banco[chonO].soDan == 0) {
            if (chieu == 'left') 
        }
    }
}

function tinhDiem(player, diem) {
    if (player == 'player') {
        document.getElementById('scorePlayer').innerHTML = 'Score: ' + diem;
    } else {
        document.getElementById('scoreAI').innerHTML = 'Score: '+diem;
    }
}
