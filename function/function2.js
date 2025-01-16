//function2.js
/*
함수이름 : getMax 
매개변수 : 배열(numAry)
기능 : 배열의 요소 중 제일 큰 값을 콘솔출력.
*/


let ary1=[3, 15 , 22, 7];
let ary2=[23, 11 , 45, 30];
let ary3=[];
for(let i=0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);

}
//매개변수로 받은 값 중에서 제일 큰 요소 출력.
function getMax(numAry=[]){
  let max=0; // 제일 큰 값을 담아놓을 변수 선언
  // 배열을 다 비교하도록 반복문
  for(let i = 0; i<numAry.length; i++){
   if( max < numAry[i]){
     max=numAry[i];
   }
  }
  console.log(`${max}`);
  return max; // 함수를 호출한 영역으로 변환.
} // end of getMax()

console.log(getMax(ary1));
document.write(getMax(ary2));
alert(getMax(ary3));
