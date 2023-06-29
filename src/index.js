document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form =  document.querySelector('form');
 form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let inputv = document.querySelector('input').value;
  //console.log(inputv);
  //console.log(e.target.inputv);
  
  buildToDo(inputv);
  form.reset();

  })
  });

function options(){
let 


}

//todo is the form id name from example
//create p tags with content
function buildToDo(todo){
  let p = document.createElement('p');
  
  //button to delete
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete)
  btn.textContent = ' x' ; 
  p.textContent = `${todo}`;
  p.appendChild(btn);
  
  //div id is todo_container and below will add a p tag with content
  document.querySelector('#main-content').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}

