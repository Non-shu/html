// 278 시간 -> 11일 몇시간 입니다.
// 입력받은 값을 기준으로 일을 계산 (입력받은 값/24시간 => 일 ) 
// 전체 값에서 나머지 계산 (입력받은 값 % 24시간 => 시간)
// 89345 분 -> ?일 ?시간 ?분 입니다.
// -------------------------------------------------------------------------------------------------//
// quiz.1
// let Hour = prompt(`시간을 입력 해 주세요:`);
// hour = 278 / 24;
// prompt = 278 % 24;
// console.log(`${Hour}시간은 ${parseInt(hour)}일 ${prompt}시간 입니다.`);

//---------------------------------------------------------------------------------------------------//
 //sol.1
//let inpuiTimes = prompt("시간을 입력하세요:");
//let days = parseInt(inpuiTimes / 24);
//let hours = inpuiTimes % 24;
//console.log(`${inpuiTimes}시간은 ${days}일 ${hours} 시간 입니다.`);

//--------------------------------------------------------------------------------------------------//
 //quiz.2
// let Time = prompt(`분을 입력 해 주세요:`);
 
// mit = Time % 60;
// hour = Time / 60 % 24; 
// day = Time / 24 / 60;
 
// console.log(`${Time}분은 ${parseInt(day)}일 ${parseInt(hour)}시간 ${parseInt(mit)}분 입니다`)

//--------------------------------------------------------------------------------------------------//
// sol.2
let inputMinutes = prompt("분을 입력하세요:");
let days = parseInt(inputMinutes / ( 24 * 60));  
let hours = parseInt((inputMinutes % (24 * 60)) / 60);
let minutes = inputMinutes % 60;

console.log(`${inputMinutes}분은 ${days}일 ${hours}시간 ${minutes}분 입니다.`);