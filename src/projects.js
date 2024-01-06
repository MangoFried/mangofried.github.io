'use strict';

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); //해당 클래스 하나가 아닌 모든요소를 선택할때 ALL사용
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;    
    if(filter == null) {
        return;      //필터 값이 null인경우 함수 종료 //카테고리 빈공간 클릭시 함수 실행X 위함
    }

    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');

}

function filterProjects(filter) {
    projects.forEach((project) => {
        if(filter == 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectsContainer.classList.add('anim-out');
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out');
    }, 250);
}