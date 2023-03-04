"use strict";

function solveEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

let a = parseFloat(prompt("Введите коэффициент a:"));
let b = parseFloat(prompt("Введите коэффициент b:"));
let c = parseFloat(prompt("Введите коэффициент c:"));

let result = solveEquation(a, b, c);

if (result.length === 0) {
  alert("Уравнение не имеет действительных корней");
} else if (result.length === 1) {
  alert(`Уравнение имеет один корень: x = ${result[0]}`);
} else {
  alert(`Уравнение имеет два корня: x1 = ${result[0]}, x2 = ${result[1]}`);
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  percent = Number(percent) / 100;
  let monthlyPercent = percent / 12;

  let bodyCredit = amount - contribution;

  let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}

let percent = prompt("Введите процентную ставку:");
let contribution = prompt("Введите первоначальный взнос:");
let amount = prompt("Введите сумму кредита:");
let countMonths = prompt("Введите срок кредита в месяцах:");

let resultTaskTwo = calculateTotalMortgage(percent, contribution, amount, countMonths);

if (resultTaskTwo === false) {
  alert("Ошибка ввода данных");
} else {
  alert(`Общая сумма выплат составит: ${resultTaskTwo}`);
}
