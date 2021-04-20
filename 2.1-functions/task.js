'use strict';

function getSolutions(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;
  const newObj = new Object();
  newObj.D = D;
  if (D < 0) {
    newObj.roots = [];
  } else if (D === 0) {
    const x1 = -b / (2 * a);
    newObj.roots = [x1];
  } else if (D > 0) {
    const x1 = (-1 * b + Math.sqrt(D)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(D)) / (2 * a);
    newObj.roots = [x1, x2];
  }
  return newObj;
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D > 0) {
    console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }
}

function getAverageScore(data) {
  let averages = 0;
  let marksArrow = [];
  for (let subject in data) {
    averages = getAverageMark(data[subject]);
    data[subject] = averages;
    marksArrow.push(averages);
  }
  data.average = getAverageMark(marksArrow);
  return data;
}

function getAverageMark(marks) {
  let meanValue = 0;
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 0) {
    for (let i = 0; i < marks.length; i++) {
      meanValue += marks[i];
    }
    meanValue = meanValue / marks.length;
    return meanValue;
  }
}

function getPersonData(secretData) {
  secretData.aaa = 1;
  secretData.bbb = 0;
  secretData.firstName = getDecodedValue(secretData.aaa);
  secretData.lastName = getDecodedValue(secretData.bbb);
  delete secretData.aaa;
  delete secretData.bbb;
  return secretData;
}

function getDecodedValue(secret) {
  if (secret === 1) {
    return "Эмильо";
  } else if (secret === 0) {
    return "Родриго";
  }
}
