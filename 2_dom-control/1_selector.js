// 1] get 메서드
let title = document.getElementById('title');
console.log(title); // getElementById로 h2요소 가져오기
title.textContent = '헬스 3대 운동'; // textContent로 화면에 '헬스 3대 운동'으로 표시됨

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트: ', items[0]);
// 첫번째 아이템인 스쿼트만 가져오고 싶을 때

console.log('벤치프레스: ', items[1]);
// 두번째 아이템인 벤치프레스 가져오고 싶을 때

console.log('데드리프트: ', items[2]);

let lilist = document.getElementsByTagName('li');
console.log(lilist);
//모든 요소 가져옴

//  2] HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('query item: ', item);
// selector은 하나만 조회함, 여러개면 첫번째 것만 조회

//querySelectorAll로 모든 선택자 조회
let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll[0]: ', itemAll[0]);
console.log('itemAll[1]: ', itemAll[1]);
console.log('itemAll[2]: ', itemAll[2]);

// h2.textContent = '<span>운동!!!</span>'; //textContent는 html태그를 문자 그대로 인식. 따라서 스팬을 태그가 아닌 텍스트 그대로 인식
// h2.innerHTML = '<span>운동@@@</span>';  //스팬을 태그로 인식시키고 싶다면 이너 텍스트 사용
// document.querySelector('body').innerHTM = '<strong>운동</strong>';

//setAttribute : 속성 추가 or 수정
//removeAttribute : 속성 제거
let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요.'); //html에서 placehlder에 넣은 값을 이걸로 변경
input.setAttribute('required', ''); //html에서 placehlder에 넣은 값을 required로 변경
input.removeAttribute('placeholder'); //html에서 placehlder에 넣은 안내문 제거
input.removeAttribute('required'); //input의 require속성을 제거하여, 입력하지 않아도 폼 제출이 가능하게 함 = 필수 입력 조건 해제

// html 요소 스타일링

let helloItem = document.querySelector('.hello');
console.log('helloItem', helloItem); //.hello 클래스를 가진 요소를 선택해서 helloItem 변수에 저장/ 현재 html에서 해당 요소는 <p class ="hello">안녕하세요.</p>
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor = 'black';
// 위에 처럼 스타일 줄 수도 있지만 현업에서는 css로 스타일 많이 줌

//classList.add()는 해당 요소에 클래스 이름 추가/ 따라서 <p class="hello"> -> <p class="hello dark one">로 바뀜
helloItem.classList.add('dark');
helloItem.classList.add('one');
// helloItem.classList.add('dark', 'one');  위에 꺼 합쳐서 이렇게 써도 됨
helloItem.classList.remove('dark'); //지정한 클래스 이름 제거 / <p class="hello dark one"> -> <p class="hello one">
