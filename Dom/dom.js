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
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc' ;

// var input = document.querySelector('input');
// input.value='Hello world' ;

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND" ;

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';
 
// QUERYSELECTORFORALL
// var titles=document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

// TRAVERSING THE DOM
var itemList=document.querySelector('#items');

// // parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// firstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// Lastchild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// nextsibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.getElementsByClassName.color='green';

// createElement
// create a div
// var newDiv=document.createElement('div');

// add class
// newDiv.className='hello';

// add id
// newDiv.id='hello 1';

// add Attr
// newDiv.setAttribute('title','hello div');

// create text Node
// var newDivText=document.createTextNode('Hello world');

// add text to Div
// newDiv.appendChild(newDivText);

// console.log(newDiv);