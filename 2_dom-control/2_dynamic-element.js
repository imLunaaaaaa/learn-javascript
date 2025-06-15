let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
// id가 'button'인 요소와 'before'인 요소를 각각 가져옴

let inputBox = document.querySelector('input');
console.log(inputBox.value);
//input 요소 선택 후 콘솔로 출력
// html에 value요소가 없어서 페이지 로드 시점에는 비어있을 수 있음

let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

// let li = document.createElement('li');
// let ul = document.querySelector('ul');
// li.textContent = '데드리프트';
// ul.appendChild(li);
// -> 새로운 li 생성 후 텍스트는 데드리프트로 설정, ul.appendChild(li)로 리스트 맨 뒤에 붙이기

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('class', 'remove-btn'); // class이름 넣기   button.classList.add('remove-btn'); 도 가능
  li.appendChild(button);
  ul.appendChild(li);
});
// 추가 버튼 클릭 시 실행됨
// li 요소 생성 후 inputBox의 입력값을 텍스트로 설정
// ul.appendChild(li)로 ul의 마지막에 추가

// addBeforeBtn.addEventListener('click', function () {
//   alert('hello');
// });
// -> 클릭 이벤트(경고창) 띄우는 태그

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  console.log(targetLi);
  li.textContent = inputBox.value;
  // ul.appendChild(li);
  ul.insertBefore(li, targetLi);
});
// '앞에 추가' 버튼 클릭 시 특정 항목 앞에 추가
// li 요소 생성 후 inputBox.value를 텍스트로 지정
// targetLi : id가 tartet인 li요소 선택
// ul.insertBefore(li, targetLi) : 새 li를 targetLi 앞에 삽입

// => appendChild() : 항목 맨 뒤에 추가
// => insertBefore() : 특정 항목 앞에 추가

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', function (event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
});
