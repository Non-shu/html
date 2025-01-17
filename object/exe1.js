// 연습 1. exe1.js
let myFriends = [];
let sum = 0;
let avg = 0;
let count = 0;
myFriends.push({name:"고길동", escore: 70, kscore: 78, gender: 'Male'});
myFriends.push({name:"프리렌", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"힘멜", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name:"슈타르크", escore: 95, kscore: 55, gender: 'Male'});

//forEach: 콘솔 출력 평균80점 이상/ Male escore averge 
myFriends.forEach(function(item,idx,ary){
  if ((item.kscore+item.escore)/2 >= 80){
  //console.log(item.name);
  //filter: 학생의 영어평균 미만 -> underAvgAry 저장.
}
if(item.gender =="Male"){
  sum += item.escore;
  count++  
}
});
avg = sum / count;
//console.log(avg);

let underAvgAry = myFriends.filter(function(item, idx, ary) {
  if(item.gender == "Male" && item.escore < avg){
  return true;    
}
})
console.log(underAvgAry);
