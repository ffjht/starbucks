const searchEl = document.querySelector('.search');
//클래스가 search인 요소를 찾아서 searchEl에 할당.
//document는 하나의 요소로 볼 수 있다. html 자체로 보면 된다...

// const searchInputEl = document.querySelector('.search input');
// .search input하면 앞에서 찾은 search를 또 찾는 것이므로 비효율적.

const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic

  searchInputEl.focus();
  //search라는 클래스를 가지고 있는 검색 요소를 포커스 한다. 
  //input요소를 선택하지 않고 
  //input요소가 소속되어 있는 search 클래스가 있는 div요소 아무거나 눌러도 .search포커스 된다. 
});


searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 특정 요소의 클래스 정보를 가지고 있는 객체에서 클래스 내용을 추가. 
  // input요소에 실제로 focus가 되면 클래스가 search인 div요소에 focused라는 클래스를 추가하겠다.
  // search에 focused가 추가되면 css에서 선택자가 무엇이 추가됐을 때 타일을 어떻게 바꾸겠다...

  searchInputEl.setAttribute('placeholder', '통합검색');  //속성이름, 실제 값
  //.search의 인풋 요소의 html속성을 지정.

});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');  
  //placeholder에 빈 값
});


const badgeEl = document.querySelector('header .badges');
// 

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);

  if(window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }
  else{
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
  // 화면이 스크롤 될때 마다 window.scrollY의 값이 바뀐다.
}, 300));
//window객체는 브라우저의 화면 자체를 의미. 여러 가지 명령을 가지고 있다.
//우리가 설치한 lodash라는 자바스크립트 라이브러리에서 throttle()을 쓸 수 있게
//스크립트 태그를 연결함으로써 등록됨.
//단위는 ms. 0.3초로 