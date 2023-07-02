let a = document.querySelectorAll(".rav");
console.log(a);

const menu = ['soup', 'cheese', 'meat']
const y = `ddddddd${menu[0]}ddddddd`;

//a[1].remove();



//document.innerHTML(a);

document.querySelector('.breakfast').onclick = breakfast;
document.querySelector('.all').onclick = all;
document.querySelector('.lunch').onclick = lunch;
document.querySelector('.shakes').onclick = shakes;
document.querySelector('.dinner').onclick = dinner;




function all() {
    del();
    let bt = document.querySelectorAll(".meal");
    for (let i = 0; i < bt.length; i++) {
        // bt[i].style = "display: none";

        bt[i].style = 'display: none';
        bt[i].style = 'display: flex';

    }
}

function breakfast() {
    let bt = document.querySelectorAll(".meal");

    for (let i = 0; i < bt.length; i++) {
        bt[i].style.display = 'none';
    }

    let inbr = document.querySelectorAll(".breakfast");
    for (let a = 0; a < inbr.length; a++) {
        inbr[a].style = "display:flex"
    }

}

function lunch() {
    let bt = document.querySelectorAll(".meal");

    for (let i = 0; i < bt.length; i++) {
        bt[i].style.display = 'none';

    }

    let inbr = document.querySelectorAll(".lunch");
    for (let a = 0; a < inbr.length; a++) {
        inbr[a].style = "display:flex"
    }

};

function shakes() {
    let bt = document.querySelectorAll(".meal");

    for (let i = 0; i < bt.length; i++) {
        bt[i].style.display = 'none';

    }

    let inbr = document.querySelectorAll(".shakes");
    for (let a = 0; a < inbr.length; a++) {
        inbr[a].style = "display:flex"
    }

};

function dinner() {
    let bt = document.querySelectorAll(".meal");

    for (let i = 0; i < bt.length; i++) {
        bt[i].style.display = 'none';

    }

    let inbr = document.querySelectorAll(".dinner");
    for (let a = 0; a < inbr.length; a++) {
        inbr[a].style = "display:flex"
    }

};

