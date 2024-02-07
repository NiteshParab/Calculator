console.log("Calculator");
let inputbox=document.querySelector(".inputBox");
let buttons=document.querySelectorAll(".box");

let str="";

for(let button of buttons){
    button.addEventListener('click',()=>{
        if(button.innerText=="="){
            str=eval(str)
            inputbox.value=str;
        }
        else if(button.innerText=="C"){
            str="";
            inputbox.value=str;
        }
        else{
            str=str+button.innerText;
            inputbox.value=str;
        } 

    })  
}

