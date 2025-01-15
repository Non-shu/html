//todo2.js
/*
이름, 전화번호 , 주소의 정보를 가진 member1,2,3을 멤버 배열에다가 (members[]) 에다가 
집어넣어서 for문으로 member1,2,3의 이름, 전화번호, 주소를  한꺼번에 출력하시오. 
*/



let myfriend1 = { name: "장득춘",  phone: "010-7431-4128",  address: "광주 어딘가2" }

let myfriend2 = { name: "김오뎅",  phone: "010-3975-4236",  address: "율하 아파트" }

  let myfriend3 = { name: "창룰라", phone: "010-7721-1921", address: "동탄 어딘가" }

  let friends = [myfriend1, myfriend2, myfriend3];
  for(let i=0; i<friends.length; i++){ 
    console.log(`이름: ${friends[0].name}, ${friends[1].name} ${friends[2].name}, 연락처 ${friends[0].phone},${friends[1].phone},${friends[2].phone}, 주소: ${friends[0].address}, ${friends[1].address}, ${friends[2].address}.`);
  }