// console.dir(document)

// console.log(document.title)
// console.log(document.domain)
// console.log(document.doctype)
// console.log(document.links)
// console.log(document.images)

// GETELEMENTBYID

// var headerTitle=document.getElementById('header-title');

// var header=document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent="hello";
// headerTitle.innerText="goodbye"

// header.style.borderBottom= 'solid 3px #000'

// GETELEMENTBYCLASS

// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent='welcome';
// items[3].style.fontWeight='bold';
// items[3].style.backgroundColor='green'

// GETELEMENTSBYTAGNAME
// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].textContent='welcome';
// li[3].style.fontWeight='bold';
// li[3].style.backgroundColor='green'

// queryselector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc' ;

var input = document.querySelector('input');
input.value='Hello world' ;

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND" ;

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';
 
// QUERYSELECTORFORALL
console.log("name");