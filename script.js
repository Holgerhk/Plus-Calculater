const input_one = document.querySelector(".input-one");
const input_two = document.querySelector(".input-two");
const output = document.querySelector(".output-text");
const btn = document.querySelector(".btn");
const btn_plus = document.querySelector(".btn-plus");
const btn_minus = document.querySelector(".btn-minus");
const btn_divide = document.querySelector(".btn-divide");
const btn_times = document.querySelector(".btn-times");
const btn_percentage = document.querySelector(".btn-percentage");

let check = 0;

btn_plus.addEventListener("click", () => {
    check = 1;
    console.log(check);
});

btn_minus.addEventListener("click", () => {
    check = 2;
    console.log(check);
});

btn_divide.addEventListener("click", () => {
    check = 3;
    console.log(check);
});

btn_times.addEventListener("click", () => {
    check = 4;
    console.log(check);
});

btn_percentage.addEventListener("click", () => {
    check = 5;
    console.log(check);
});

btn.addEventListener("click", () => {
    let value_one = input_one.value;
    let value_two = input_two.value;

    if (check == 1) {
        let sum = +value_one + +value_two;
        output.textContent = sum;

    } else if (check == 2) {
        let sum = +value_one - +value_two;
        output.textContent = sum;

    } else if (check == 3) {
        let sum = +value_one / +value_two;
        output.textContent = sum;

    } else if (check == 4) {
        let sum = +value_one * +value_two;
        output.textContent = sum;
        
    } else if (check == 5) {
        let sum = (value_two / 100) * value_one;
        output.textContent = sum;
    }
});