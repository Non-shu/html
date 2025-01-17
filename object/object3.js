//object3.js
//forEach() < 얘도 반복문
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function(item, idx, ary) {
 //console.log(`item=>${item}`);
  if (item%2==1){
    console.log(`idx=> ${idx}`);
    sum+=item;
  } 
  //큰값.
  if(item >max){
    max = item;
  }
   });
 console.log(`홀수의 합계${sum}`);
 console.log(`최고값은 ${max}`);

//filter(function(item,idx,ary){}) 조건을 만족하는 배열생성.
let filterAry= numAry.filter(function(item,idx,ary){
  if(item%2==1){
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);