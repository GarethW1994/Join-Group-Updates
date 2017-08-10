const chat_list = document.querySelector('#chat_list');
var count = localStorage.setItem('count', 0);

function update_chat(user) { 
    if (localStorage.count === undefined) {
        localStorage.count = 0;
    }
    
    count  = Number(localStorage.count);
    
    let li = document.createElement('li');
    
    li.innerHTML = "(" + user.date + ") " + user.user_name + " : " + user.messages[count].msg;
    
    chat_list.appendChild(li);
    
    count++;
    
    localStorage.count = count;
}