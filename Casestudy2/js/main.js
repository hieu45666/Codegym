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

let chonO;

function chon(a) {
    for (let i = 7; i <= 11; i++) {
        let x = 'dan'+i;
        document.getElementById(x).style.backgroundColor = 'white';
    }
    chonO = a;
    x = 'dan'+a;
    document.getElementById(x).style.backgroundColor = 'red';
}

let scoreAI = 0;
let scorePlayer = 0;

async function raiQuan(chieu, chonO) {
    let x = 'dan' + banco[chonO-1].stt;
    document.getElementById(x).style.backgroundColor = 'white';
    if (chieu == 'left')
    {   
        let y = banco[chonO-1].soDan;
        banco[chonO-1].soDan = 0;
        for (let i = 0; i < y; i++) { 
            if (banco[chonO].stt % 6 == 0) {
                x = 'quan' + banco[chonO].stt;
                document.getElementById(x).style.backgroundColor = 'red';
                banco[chonO].soQuan += 1; 
                await sleep(300);
                document.getElementById(x).style.backgroundColor = 'white';
            } else {
                x = 'dan' + banco[chonO].stt;
                document.getElementById(x).style.backgroundColor = 'red';
                banco[chonO].soDan += 1;
                await sleep(300);
                document.getElementById(x).style.backgroundColor = 'white';
            }
            chonO++;
            if (chonO == 12) { chonO = 0;}
        reload();
    }
} else {
    let y = banco[chonO-1].soDan;
    banco[chonO-1].soDan = 0;
    for (let i = 0; i < y; i++) { 
        if (banco[chonO-2].stt % 6 == 0) {
            x = 'quan' + banco[chonO-2].stt;
                document.getElementById(x).style.backgroundColor = 'red';
                banco[chonO-2].soQuan += 1; 
                await sleep(300);
                document.getElementById(x).style.backgroundColor = 'white'; 
        } else {
            x = 'dan' + banco[chonO-2].stt;
                document.getElementById(x).style.backgroundColor = 'red';
                banco[chonO-2].soDan += 1;
                await sleep(300);
                document.getElementById(x).style.backgroundColor = 'white';
        }
        chonO--;
        if (chonO == 1) { chonO = 13;}
    reload();
        }
    }
}

function left() {
    raiQuan('left', chonO);
}

function right() {
    raiQuan('right', chonO);
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

tinhDiem('player', 15);
tinhDiem('AI', 22);