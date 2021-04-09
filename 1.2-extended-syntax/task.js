"use strict";

function getResult(a, b, c) {
  const x = [];
  const discr = Number(b ** 2 - 4 * a * c);
  if (discr > 0) {
    x[0] = Number(((-1 * b) + Math.sqrt(discr)) / (2 * a));
    x[1] = Number(((-1 * b) - Math.sqrt(discr)) / (2 * a));
  } else if (discr === 0) {
    x[0] = -1 * b / (2 * a);
  }
  return x
}


let marks = [];
function getAverageMark(marks) {
  let sum = 0;
  switch (true) {
    case marks.length === 0:
      return 0;
    case marks.length > 5:
      marks.splice(5);
      console.log("Больше пяти оценок");
  }
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return (sum / marks.length);
}


function askDrink(name, dateOfBirthday) {
  if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
  }
}
