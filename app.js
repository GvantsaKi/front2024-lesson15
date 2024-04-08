for (let i=0; i<=20; i++){
	console.log(i)
}

let i=0;

while (i<30) {
	i++;
	console.log(i)
}

let test=0;
do{
	console.log(test);
	test++;
}while(test<=40);


const numbers = [1,2,5,7,8,10,23,24,26];
const even=[];
for(let i=0; i<numbers.length; i++) {
	if (numbers[i] % 2===0) {even.push(numbers[i]);}
}
console.log(even);


let currentDay;
switch(new Date().getDay()) {
case 0:
	currentDay="Sunday";
	break;
case 1:
	currentDay="Monday";
	break;
case 2:
	currentDay="Tuesday";
	break;
case 3:
	currentDay="Wednesday";
	break;
case 4:
	currentDay="Thursday";
	break;
case 5:
	currentDay="Friday";
	break;
case 6:
	currentDay="Saturday";
	break;
}

console.log(currentDay);