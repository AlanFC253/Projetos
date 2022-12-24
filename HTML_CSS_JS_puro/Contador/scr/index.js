"use strict"
let divhoras=document.getElementById("hr")
let divmin=document.getElementById("min")
let divseg=document.getElementById("seg")



document.getElementById("btn").addEventListener("click",(e)=>{
    let horas=0;
    let min = 0;
    let seg =0;
    setInterval(() => {
        if (seg<60) {
            seg++
            divseg.innerHTML=seg;
        }else{
            seg=1;
            divseg.innerHTML=seg;
        }

        if (seg==60) {
            min++
            divmin.innerHTML=min;
        }else if(min>=60){
            min=1;
            divmin.innerHTML=min;
        }
            
        if (min==60) {
            horas++
            divhoras.innerHTML=horas;
        }
    }, 1000);

})