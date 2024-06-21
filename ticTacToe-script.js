let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let div1 = document.querySelector(".msg-container");
let p2 = document.querySelector("#msg");''
let newBtn = document.querySelector("#new-game");

let turnO = true; //playerX, playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

resetBtn.addEventListener("click", () =>{
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    div1.classList.add("hide");
});

newBtn.addEventListener("click", () =>{
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    div1.classList.add("hide");
});

let checkWinner = () => {
    for (let ptrn of winPatterns) {
        let pos1Val = boxes[ptrn[0]].innerText;
        let pos2Val = boxes[ptrn[1]].innerText;
        let pos3Val = boxes[ptrn[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}



showWinner = (winner) => {
    p2.innerText = `Winner is ${winner}`;
    for (let box of boxes) {
        box.disabled = true;
    }
    div1.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ //playerO
            box.innerText = "O";
        }else{ //playerX
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    })
})