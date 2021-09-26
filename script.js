

let mybutton = document.getElementById('push');
let input = document.getElementById('input'); 
let newtask = document.getElementById('newtask');
let list = document.getElementById('tasks')

mybutton.addEventListener('click', function(){
    if(input.value == ''){
        let msg = document.createElement('p')
        msgText = document.createTextNode('Please enter a task!')
        msg.appendChild(msgText);
        msg.style.color= 'red';

        newtask.appendChild(msg);
        setTimeout(()=> {
            newtask.removeChild(msg);
        }, 2000);
    }
    else {
        list.innerHTML += `<div class='task'>
                                <span>
                                ${input.value}
                                </span>
                                <button class='delete' onclick='deleteOne()'>Delet
                                </button>
                            </div>`
        input.value= '';
    }

     // Delete one tasks
     var deleteButton = document.querySelectorAll('.delete')
     for( let i = 0; i < deleteButton.length; i++){
         deleteButton[i].addEventListener('click',function (){
            this.parentNode.remove();
         })
     }  
     
    // Mark the task as complete 
    var tasks = document.querySelectorAll('.task');
    for(var i =0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
    }
    }

    // Delete all the tasks
    let deleteAll = document.getElementById('deleteAll');
    deleteAll.addEventListener('click', function(){
    list.innerHTML = ''
    localStorage.clear();
})
})











