 let algebra = 3;
 let geography = 5;
 let physics = 4;
 let userName;

 function averageMark(algebra, geography, physics) {
   let mean = (algebra + geography + physics) / 3;
   return mean;
 }

 function sayHello(userName) {
   return `Привет, мир! Меня зовут ${userName}`;
 }

 let x = 2;
 let y = 22;
 let z = 0;

 function calculateFormula() {
	 var argsArr = Array.from(arguments);
  	console.log(argsArr);
	 let answer = x * y + 5 * z + x - 1;
   return answer;
 }
