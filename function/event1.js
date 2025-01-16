//event1.js
//<button>클릭하기</button>//
// let item = document.querySelector(`button`);

// item.addEventListener(`click`, function() {
//   let n1 = document.querySelector(`#num1`).valueAsNumber;
//   let n2 = document.querySelector(`#num2`).valueAsNumber;
//   console.dir(n1 + n2);
  // document.querySelector(`#result`)['value'] = n1 + n2; 
  /* result = document.querySelector(`#result`).value = n1 + n2;
  document.qerySelector(`#result`).value = parseInt(n1) + parseInt(n2); */
  // });
let item2 = document.querySelector(`button[name="add"]`);
;
item2.addEventListener(`click`, function() {
  let n1 = document.querySelector(`#num1`).valueAsNumber;
  let n2 = document.querySelector(`#num2`).valueAsNumber;
  console.dir(n1 + n2);
  document.querySelector('#result')['value'] = n1 + n2;
});
let item3 = document.querySelector(`button[name="minus"]`);
item3.addEventListener(`click`, function() {
  let n1 = document.querySelector(`#num1`).valueAsNumber;
  let n2 = document.querySelector(`#num2`).valueAsNumber;
  console.dir(n1 - n2);
  result = document.querySelector('#result').value = n1 - n2;
});
let item4 = document.querySelector(`button[name="clear"]`);
item4.addEventListener(`click`, function() {
document.querySelector(`#num1`).value = '';
document.querySelector(`#num2`).value = '';
document.querySelector(`#result`).value = '';
})

//더하기/ 빼기버튼 