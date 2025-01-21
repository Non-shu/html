//dom.js

document.addEventListener('DOMContentLoaded', init);


function init(){
  console.log(document);
  document.forms.myForm.addEventListener('submit', function(e){
    e.preventDefault();// 기본 기능 차단.
    //사용자의 입력값을 변수에 저장.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;
    
    if(mid == null || mid.length < 5 || mid.length > 20 ){
      alert("id를 5자 이상 20자 이하로 설정해 주세요.");
      return; // 함수종료
    }
    console.log(mid.length);

     let member = {memberId: mid, memberName: mname, point: mpoint};
     let tr = makeTr(member); //값.
    // let member = [mid,mname, mpoint];
    // let tr = makeTrAry(member);
    // let td =document.createElement('td');
    // td.innerText = mid;
    // tr.appendChild(td);
    
    // let td1 = document.createElement('td');
    // td1.innetText = mname;
    // tr.appendChild(td1);
    
    // let td2 = document.createElement('td');
    // td2.innerText = mpoint;
    // tr.appendChild(td2);
    // // <tr></tr>
   
    //tbody의 하위요소로추가
    document.querySelector('#list').appendChild(tr);
  })//end of sbmit.
  //input 값이 change 이벤트 
document.querySelector('thead input').addEventListener('change', function(){
  // tbody input값을 변경 
  document.querySelectorAll('tbody input').forEach(function (item){
  item.checked = document.querySelector('thead input[type="checkbox"]').checked;
 });  
});


} //end of init().


function makeTr(mbr= {}){
  let tr =document.createElement('tr'); // td-3를 자식요소로 가질부모 
  let td1 =document.createElement('td')
  let cbox = document.createElement('input');
  cbox.type ="checkbox";
  td1.appendChild(cbox);
  tr.appendChild(td1);

   for(let prop in mbr){
     let td =document.createElement('td'); // 회원id , 이름, 점수 
     td.innerText =  mbr[prop];
     tr.appendChild(td);      
   }
   //<td><button>삭제</button></td>
   let td = document.createElement('td');
   let btn = document.createElement('button');
   btn.style.backgroundColor = 'yellow';
   btn.innerText = '삭제';
   btn.addEventListener('click', function(){
    btn.parentElement.parentElement.remove();
   });
   td.appendChild(btn);
   tr.appendChild(td);
   return tr; //return
 }//end of makeTr();

// function makeTrAry(mbr=[]){
// let tr = document.createElement('tr');
//   mbr.forEach(function (item){
//     td.innerText = item;
//     tr.appendChild(td);
//   });
//  return tr;
// } // end of makeTrAry







