let divhoras=$("#hr");
let divmin=$("#min");
let divseg=$("#seg");

$("#btn").click(function(){
    let horas=0;
    let min = 0;
    let seg =0;

    setInterval(() => {
        if (seg<60) {
            seg++;
            divseg.html(seg);
        } else {
            seg=1;
            divseg.html(seg);
        }

        if (seg==60) {
            min++;
            divmin.html(seg);
        }else if (min>=60) {
            min=1;
            divmin.html(min);
        }

        if (min==60) {
            horas++
            divhoras.html(horas);
        }

    }, 1000);
});
