// forloop4.js
// 0 <= Math.random() * 100 < 100 => 50~100. min 50 ~ max 100.
// 학생 10명의 임의 점수를 배열에 저장. 
let scores =[];
let sum = 0; //합계를 담을 변수.
let max = 0; //최대값을 담을 변수.

for (let i = 0; i<10; i++) {
  scores[i] = parseInt(Math.random()*51) + 50;    
  console.log(scores[i])
}
//평균계산
for(let i=0; i <10; i++) {
 sum += scores[i]; //합계.
 if(max<scores[i]){ //최대값 
   max=scores[1];
 }
}
console.log(`평균 값은 ${sum/10} 입니다`);
document.write(`<p>${max}</p>`)