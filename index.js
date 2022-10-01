//Write a javScript program that accepts a number as input and insert dashes

const card = document.querySelector(".cardNum");
const exp = document.querySelector(".exp");
const cvv = document.querySelector(".cvvIn");
const btn = document.querySelector(".btn");

card.addEventListener("keyup", (e) =>{
    if (e.key == "Backspace" || e.key == "Delete") {
        return false;
    }else if(card.value.length > 0){
        if(card.value.length == 4 || card.value.length == 10 || card.value.length == 16){
            const cpy = card.value + "  "
            card.value = cpy   
        }
    }
    if(card.value.length == 22){
        exp.focus(); 
    }
})

exp.addEventListener("keyup", (n) =>{
    if (n.key == "Backspace" || n.key == "Delete") {
        return false;
    }else if(exp.value.length > 0){
        if(exp.value.length == 2){
            const copy = exp.value + "/"
            exp.value = copy
        }
    }
    if(exp.value.length == 5){
        cvv.focus(); 
    }
})

cvv.addEventListener("keyup", (v) =>{
    if(cvv.value.length == 4){
        const cv = cvv.value.slice(0, -1);
        cvv.value = cv;
        // btn.focus(); 
    }
})

// function getFocus() {
//     document.getElementById("myText").focus();
//   }
  
//   function loseFocus() {
//     document.getElementById("myText").blur();
//   }
