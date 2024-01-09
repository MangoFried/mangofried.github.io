'use strict';  //strict모드 예전 버전을 코드 사용한다면 에러메세지 출력

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => { //문서에 스크롤되는 이벤트 추가
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark'); 
  //요소에 새로운 스타일을 만들어 추가(간접적,정적, 많은 스타일을 추가 하고 싶을때 사용)
    } else {
        header.classList.remove('header--dark');
    }
});

//홈 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;  // home container의 높이를 할당
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight; 
    //인라인 스타일을 이용, (직접적) why? 매순간마다 값이 달라지기 때문 (유동적,끊김없이)
});


// 스크롤시 홈섹션이 절반 이상 내리면 Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrow.style.opacity = 1;  // 스타일이 있다 or 없다 값이 2가지인 경우 (정적)
    } else {
        arrow.style.opacity = 0;  // 인라인스타일 적용
    }
});

// Navbar 토글버튼 클릭 처리 (필요 요소 2개, 메뉴 클래스 ,토글버튼 클래스)
const navbarMenu = document.querySelector('.header__menu');
const navberToggle = document.querySelector('.header__toggle');
navberToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');         // toggle() : on or off 반복 관련 함수 
});
//navbarMenu에 '.open' 이라는 클래스 존재 여부를 확인하고, 있다면 삭제 or 없다면 추가


// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});

// 1분코딩 메뉴 클릭이벤트 엑티브 활성화
// const currentMenu;
// const menuLinks = document.querySelector('.header__menu__item');

// function scrollMenuHandler() {
//     if(currentMenu) {
//         currentMenu.classList.remove('header__menu__item.active');
//     }
//     this.classList.add('header__menu__item.active');
//     currentMenu = this;
// }

// for(let i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener('click', scrollMenuHandler)
// }