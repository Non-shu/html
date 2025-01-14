// todo1.js
// 입력받은 2개의 시간을 비교하여 많은 시간을 일/시 로 표시하시오. 

let a = prompt() + 1;
let b = prompt() + 1;
let c = prompt() + 1;
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

console.log(`가장 많은 시간은 ${result}입니다.`)