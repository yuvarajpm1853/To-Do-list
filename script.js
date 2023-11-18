
let todo_list=[];
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
        <button  class="red-button" onclick="todo_list.splice(${index},1);
        document.querySelector('.displayTasks').innerHTML='';
        html='';renderPage();">Delete</button>`;
        nameElement.value='';
        dueDateElem.value='';
    });
    displayTasksElem.innerHTML=html;
}
renderPage();

