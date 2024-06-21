let scr = document.querySelector("#user-score");
let tar = document.querySelector("#target-score");
let ann1 = document.querySelector(".announce p1");
let ann2 = document.querySelector(".announce p2");
let resetBtn = document.querySelector("#reset");
let btns = document.querySelectorAll("button");
ann1.innerText = "Start the game";
let compshot;
let wickets = 0;
let runs = 0;
let balls = 0;
let tarscr = Math.floor(Math.random() * 200 + 100);
scr.innerText = `${runs}/0 (${balls} balls)`;

tar.innerText = `${tarscr}/10 (60 balls)`

score = (run) => {

    runs = runs + run;
    balls++;
    compshot = Math.floor(Math.random()*7);
    gameOver(balls,runs, wickets);
    announce(runs,balls);
    if(run === compshot && wickets<10){
        wickets++;
        runs = runs - run;
    }
    if(wickets===10){
        for (const btn of btns) {
            btn.disabled = true;
        }
        document.body.style.background = "red";
        ann2.innerText = `YOU LOST by ${tarscr - runs} runs`;
    }
    scr.innerText = `${runs}/${wickets} (${balls} balls)`;
    checkWinner(runs,wickets);
}
announce = (runs,balls) => {

    ann1.innerText = `You need ${tarscr - runs} runs in ${60-balls} balls`;
}
checkWinner = (runs,wickets) => {

    if (runs>=tarscr){
        for (const btn of btns) {
            btn.disabled = true;
        }
        ann2.innerText = `YOU WIN by ${wickets} wickets`
        ann1.innerText = "";
        document.body.style.background = "green";
    }
}
gameOver = (balls, runs, wickets) =>{

    if(balls===60){
        if(runs<tarscr){
            for (const btn of btns) {
                btn.disabled = true;
            }
            document.body.style.background = "red";
            ann2.innerText = `YOU LOST by ${tarscr - runs} runs`;
        }else{
            for (const btn of btns) {
                btn.disabled = true;
            }
            ann2.innerText = `YOU WIN by ${wickets} wickets`
            ann1.innerText = "";
            document.body.style.background = "green";
        }
    }
}
resetBtn.addEventListener("click",()=>{
    runs = 0;
    balls = 0;
    wickets = 0;
    scr.innerText = `${runs}/0 (${balls} balls)`;
    tarscr = Math.floor(Math.random() * 200 + 100);
    tar.innerText = `${tarscr}/10 (60 balls)`
    ann1.innerText = "Start the game";
    ann2.innerText = "";
    document.body.style.background = "#a3b1c0";
    for (const btn of btns) {
        btn.disabled = false;
    }
})
