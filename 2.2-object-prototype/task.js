String.prototype.isPalindrome = function() {
const expectedPalindrom = this.toLowerCase().split(' ').join('').split('').reverse().join('');
  if (this.toLowerCase().split(' ').join('').split('').join('') == expectedPalindrom) {
    return true;
  } else {
    return false;
  }
}


function getAverageMark(marks) {
  let average = 0;
  let roundedAverage = 0;
for (let i = 0; i < marks.length; i++) {
  if (marks.length == 0) {
    roundedAverage = 0;
  } else {
    average += marks[i];
    roundedAverage = Math.round(average/marks.length);
  }
}
return roundedAverage;
}

function checkBirthday(birthday) {
let now = new Date();
const userDate = new Date(birthday);
const diff = now.getTime() - userDate.getTime();
let age = diff/31536000000;
if (age > 18) {
  return ('Старше 18')
}
    // return verdict
}
