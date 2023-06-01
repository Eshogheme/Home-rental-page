



const openDropDown = document.querySelector('.div2 .btn1');
const closeDropDown = document.querySelector('.div2 .dropdown-menu .btn2')
const div = document.querySelector('.dropdown-menu');


function newDropDown(){
  div.classList.add('new-dropdown');
}
openDropDown.addEventListener('click',newDropDown);
function close(){
  div.classList.remove('new-dropdown');
}
closeDropDown.addEventListener('click',close);



const anotherDropDown = document.querySelector('.div2 .btn3');
const closeBtn = document.querySelector('.div2 .dropdown-menu2 .btn4')
const newDiv = document.querySelector('.dropdown-menu2')


function baby(){
  newDiv.classList.add('life');
}
anotherDropDown.addEventListener('click',baby);
function honey(){
  newDiv.classList.remove('life');
}
closeBtn.addEventListener('click',honey);