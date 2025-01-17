//exe2.js

let numAry = [{name:'조카', age:10},
              {name:'큰조카', age:14},
              {name:'삼촌', age:31},
              {name:'큰아버지', age:51},
              {name:'나', age:21}];

let filAry = numAry.filter(function(item,idx,ary){
  if(item.name.indexOf('조카') != -1){
  return true;
}
return false;
});
console.log(filAry);
// forEach 사용해서 0번째 값은 10 
// 1번째 값은 10  출력

numAry.forEach(function(item,idx,ary){
 //console.log(`${item}`)
if(item.age > 20){
  console.log(`20살 초과인 사람은 ${item.name}`)
}
})
