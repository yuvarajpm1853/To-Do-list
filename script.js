
let todo_list=JSON.parse(localStorage.getItem('todo_list'))||[];
let displayHTML,html,task;

//checks enter key is pressed 
function enterKey(event){
    event.key==='Enter' && addTask();
}

// add the task in array
let nameElement=document.querySelector('.name');
let dueDateElem=document.querySelector('.dueDate');

function addTask(){
    let name,dueDate;
    name=nameElement.value;
    dueDate=dueDateElem.value;
    if(name && dueDate){
        todo_list.push({name,dueDate});
        renderPage();
}}
// display the task
let displayTasksElem=document.querySelector('.displayTasks');
displayTasksElem.innerHTML=html;

// render the page
function renderPage(){
    html='';
    todo_list.forEach((todo_data,index)=>{
    const {name,dueDate}=todo_data;
    html+=`<div>${name} </div><div> ${dueDate}</div>
        <button  class="red-button" onclick="deleteTask(${index})">Delete</button>`;
        nameElement.value='';
        dueDateElem.value='';
    });
    displayTasksElem.innerHTML=html;
    console.log(todo_list);
    localStorage.setItem('todo_list',JSON.stringify(todo_list));
}
renderPage();
// delete function
function deleteTask(index){
    todo_list.splice(index,1);
    displayTasksElem.innerHTML='';
    html='';
    renderPage();
}
