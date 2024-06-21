let inpt = document.querySelector("input")
let btns = document.querySelectorAll("button");
inpt.value = "";

for (let btn of btns) {
    btn.addEventListener("click",()=>{

    })
}

appendToDisplay = (a) => {
    inpt.value += a;
}

calculateResult = () => {
    inpt.value = eval(inpt.value);
}

clearDisplay = () => {
    inpt.value = "";
}