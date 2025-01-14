// condition3.js
// 2개의 숫자를 입력.
// 2개 짝수 => "모두 짝수."
// 1개 짝수 => "하나는 짝수." 
// 0개 => "짝수는 없습니다."

let AAA = prompt(`값을 입력해 주세요:`);
let BBB = prompt(`값을 입력해 주세요:`);

if(AAA % 2 == 0 && BBB % 2 == 0){
  console.log(`모두 짝수 입니다.`);
} else if (AAA % 2 == 0 || BBB % 2 == 0){
  console.log(`하나는 짝수 입니다.`);
} else if(AAA % 3 == 0 !== null){
  console.log(`짝수는 없습니다.`);
}


// 좁은 범위를 위에 넓은 범위를 밑에 