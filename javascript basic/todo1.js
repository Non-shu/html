// todo1.js
// 입력받은 2개의 시간을 비교하여 많은 시간을 일/시 로 표시하시오. 

let a = prompt()
let b = prompt()
let c = prompt()
let result = 0;
console.log(a, b, c);
if (a > b) {
  if(a > c){
    result = a;
  }else{
    result = c;
  }
} else{
  if ( b > c ) {
    result = b;
  } else{
    result = c;
  }
}
let Hour = parseInt(result % 24);
let Days = parseInt(result / 24);
console.log(`가장 많은 시간은 ${Days}일, ${Hour}시간 입니다.`);