const input_one = document.querySelector(".input-one");
const input_two = document.querySelector(".input-two");
const output = document.querySelector(".output-text");
const btn = document.querySelector(".btn");
const btn_sign = document.querySelectorAll(".btn-sign");

console.log(btn_sign);

btn_sign.forEach(btn => {
    if (btn.clicked == true) {
        btn_sign == false;
        btn == true;
        console.log(btn);
    }
});

btn.addEventListener("click", () => {
    let value_one = input_one.value;
    let value_two = input_two.value;

    if (btn_sign[0].clicked == true) {
        let sum = +value_one + +value_two;
        output.textContent = sum;

    } else if (btn_sign[1].clicked == true) {
        let sum = +value_one - +value_two;
        output.textContent = sum;

    } else if (btn_sign[2].clicked == true) {
        let sum = +value_one / +value_two;
        output.textContent = sum

    } else if (btn_sign[3].clicked == true) {
        let sum = +value_one * +value_two;
        output.textContent = sum
        
    } else if (btn_sign[4].clicked == true) {
        let sum = +value_one + +value_two;
        output.textContent = sum
    }
});