"use strict";
// function checkValues () {
//   if (percent < 0) {
//     return `Параметр ${percent} содержит неправильное значение ${percent}`;
//   } else {
//     calculateTotalMortgage();
//   };
  // if (contribution < 0 || contribution === 'string' || contribution === NaN) {
  //   return `Параметр ${contribution} содержит неправильное значение ${contribution}`;
  // } else {
  //   calculateTotalMortgage();
  // }
  // if (amount < 0 || amount === 'string' || amount === NaN) {
  //   return `Параметр ${amount} содержит неправильное значение ${amount}`;
  // } else {
  //   calculateTotalMortgage();
  // }
  // if (date < 0 || date === 'string' || date === NaN) {
  //   return `Параметр ${date} содержит неправильное значение ${date}`;
  // } else {
  //   calculateTotalMortgage();
  // }
// }
  // checkValues();
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (percent < 0 || isNaN(percent) === true || percent === "") {
    return `Параметр percent содержит неправильное значение ${percent}`;
  } else if (contribution < 0 || isNaN(contribution) === true || contribution === "") {
    return `Параметр percent содержит неправильное значение ${contribution}`;
  }
  // else {
  //   calculateTotalMortgage();
  // };
  let P = percent/(12*100);
  let oneMonthImMsec = 31536000000/12;
  let months = Math.round((date.getTime() - new Date().getTime())/oneMonthImMsec);
  let monthFee = (amount - contribution) * (P + P/(((1 + P)** months)-1));
  let totalAmount = monthFee * months;
  console.log(totalAmount.toFixed(2));
  return Number(totalAmount.toFixed(2));
}



function getGreeting(name) {
  let greeting = `Привет, мир! Меня зовут ${name}.`
  if (name === '' || name === undefined) {
    name = 'Аноним';
  }
    return greeting;
}
