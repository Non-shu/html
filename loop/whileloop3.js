//whileloop3.js
//ovject 타입.

let myInfo = {
  name:"홍길동",
  age:20,
  height : 170,
weight : 65
}; //object.

console.log(myInfo);
console.log(`dlfma : ${myInfo.name}, 나이 ${myInfo[`age`]}`);
console.log(`zl : ${myInfo.height}, ahaanrp ${myInfo[`weight`]}`);
// for..in 반복문
for (let prop in myInfo) {
  console.log(` 속성 : ${prop}, 값 : ${myInfo[prop]}`);
}

let nameAry = ['홍길동', '김민석', '박석민'];
for (let name of nameAry) {
  console.log(`값 : ${name}`);
}

let myfriend1 = {
  name: "홍길동",
  phone: "010-1111-2222",
  address: "대구 중구 32번지"
}

let myfriend2 = {
  name: "김민수",
  phone: "010-1221-2112",
  address: "대구 중구 50번지"
}

  let myfriend3 = {
    name: "박석민",
    phone: "010-2112-1221",
    address: "대구 중구 444번지"
  }
  
let friends = [myfriend1, myfriend2, myfriend3];
friends[3] = {name: "박창석", phone:"010-3423-4444", address: "대구 서구 평리동 333번지"}
console.log(friends[0].name);
console.log(friends[1].phone);
console.log(friends[2].address);
for(let i=0; i<friends.length; i++){
  //frind name.
  console.log(`이름: ${friends[1].name}, 연락처 ${friends[1].phone}, 주소 ${friends[1].address}.`);
}