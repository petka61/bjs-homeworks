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

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter(a, b, c) {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea(a, b, c) {
    let perimeter = this.getPerimeter(a, b, c) / 2;
    let square = Number((Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c))).toFixed(3));
    return square;
  }
}

function getTriangle (a, b, c) {
  try {
    const abc = new Triangle(a, b, c);
    return abc;
  } catch (e) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}
