//forloop2.js
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//    console.log(`현재 i의 값 : ${i}`)
//   if(1 % 2 == 0) {
//     sum = sum + i;
//   }
// }
//  console.log(`1~10까지 짝수값의 합은 ${sum}`);
//  console.log('end of for');
let html = '';
html += '<table border="1">';
html += '<tbody>';

for(let i = 1; i <= 9; i++){
  if(i % 2 == 1){
html += `<tr><td style='background-color: yellow;'>2 * ${i}=  ${2 * i}</td></tr>`;
}else {
  html += `<tr><td style='background-color: green;'>2 * ${i}=  ${2 * i}</td></tr>`;
}
}

html += `</tr>`;
html +=`</tbody>`;
document.write(html);
