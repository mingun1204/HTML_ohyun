// DOM 요소
const $modalWrap = document.querySelector(".modal-wrap");
const $newBtn = document.querySelector(".new-btn");
const $closeBtn = document.querySelector(".close-btn");
const $openBtn = document.querySelector(".open-btn");
const $deleteBtn = document.querySelector(".delete-btn");
const $title = document.querySelector(".title");

$title.classList.add("change-color")


const remove = () => {
    $modalWrap.classList.remove("hidden");
};
const add = () => {
    $modalWrap.classList.add("hidden");
};

// .new-btn 클릭시, .modal-wrap의 hidden 클래스 없애기

$newBtn.addEventListener("click",() => {
    // $modalWrap.classList.remove("hidden");
    remove();
});
// .close-btn 클릭시, .modal-wrap에 hidden 클래스 추가
// 힌트) remove대신 add 사용하기

$closeBtn.addEventListener("click",() => {
    // $modalWrap.classList.add("hidden");
    add();
});

// .open-btn 클릭시, .modal-wrap의 hidden 클래스 없애기

$openBtn.addEventListener("click",() => {
    // $modalWrap.classList.remove("hidden");
    remove();
});

// .delete-btn 클릭시, 삭제 여부 물어보는 창 띄워주기

$deleteBtn.addEventListener("click",() => {
    confirm("정말 삭제하시겠습니까?");
});