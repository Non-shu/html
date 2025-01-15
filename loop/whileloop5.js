//whileloop5.js
let run = true;
let members = [];

members[0] = {
  member_id: "user01",
  member_name: "홍길동",
  point: 80
};
members[1] = {
  member_id: "user02",
  member_name: "신현욱",
  point: 90
};
members[2] = {
  member_id: "user03",
  member_name: "김민식",
  point: 85
};

while(run) {
let serchName = prompt("찾을 친구의 이름을 입력하세요:");
  if(serchName == 'stop'){
    break; //(while 반복분 종료.)
  }
let exists = false; //존재여부를 담아놓기. 
for(let i = 0; i<members.length; i++) {
//   //배열의 이름속성 중에서 serchName과 같으면 point를 콘솔출력.
   if(members[i].member_name == serchName){
     console.log(`${serchName}의 포인트는${members[i].point}포인트 입니다.`);
     exists = true;
     break;
   } 
}
 if(!exists) {
  alert("찾는 친구이름이 없습니다.");
 }
} // end of while.
console.log("end of program");