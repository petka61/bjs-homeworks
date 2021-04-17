'use strict';
function getSolutions( a, b, c ) {
  const D = Math.pow(b, 2) - 4*a*c;
  const newObj = new Object();
  newObj.D = D;
  if (D < 0) {
    newObj.roots = [];
    return newObj;
  } else if (D === 0) {
    const x1 = -b / (2*a);
    newObj.roots = [x1];
    return newObj;
  } else if (D > 0) {
    const x1 = (-1*b + Math.sqrt(D)) / (2*a);
    const x2 = (-1*b - Math.sqrt(D)) / (2*a);
    newObj.roots = [x1, x2];
    return newObj;
  }
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D > 0) {
    console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }	else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }
}

function getAverageScore(data) {
const subjects = new Object();
subjects.algebra = [];
subjects.geometry = [];
subjects.russian = [];
subjects.physics = [];
subjects.music = [];
subjects.english = [];
subjects.poetry = [];
subjects.chemistry = [];
subjects.french = [];
}

function getAverageMark(marks) {
  let meanValue = 0;
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 0) {
    for (let i = 0; i < marks[i]; i++) {
      meanValue += marks[i];
    }
    meanValue /= marks.length;
    return meanValue;
  }
}
