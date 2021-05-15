function parseCount(datas) {
  let answer = Number.parseInt(datas);
  if (isNaN(answer) === true) {
    throw new Error('Невалидное значение');
  } else {
    return answer;
  }
}

function validateCount(datas) {
  try {
    parseCount(datas);
  } catch (e) {
    return (e);
  }
  return parseCount(datas);
}
