"use strict";
function checkValues (percent, contribution, amount, date) {
  if (percent < 0 || percent === 'string' || percent === NaN) {
    return `Параметр ${percent} содержит неправильное значение ${percent}`;
  } else {
    calculateTotalMortgage();
  };
  if (contribution < 0 || contribution === 'string' || contribution === NaN) {
    return `Параметр ${contribution} содержит неправильное значение ${contribution}`;
  } else {
    calculateTotalMortgage();
  }
  if (amount < 0 || amount === 'string' || amount === NaN) {
    return `Параметр ${amount} содержит неправильное значение ${amount}`;
  } else {
    calculateTotalMortgage();
  }
  if (date < 0 || date === 'string' || date === NaN) {
    return `Параметр ${date} содержит неправильное значение ${date}`;
  } else {
    calculateTotalMortgage();
  }
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let P = percent/(12*100);
  let oneMonthImMsec = 31536000000/12;
  let months = Math.round((date.getTime() - new Date().getTime())/oneMonthImMsec);
  let monthFee = (amount - contribution) * (P + P/(((1 + P)** months)-1));
  let totalAmount = monthFee * months;

  console.log(totalAmount.toFixed(2));
  return Number(totalAmount.toFixed(2));
}
checkValues();



    // return `Параметр ${} содержит неправильное значение ${}`;







// function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
// }
